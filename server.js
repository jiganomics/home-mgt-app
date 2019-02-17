const express = require("express");
const math = require("mathjs");
const mongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const sqlite = require("sql.js");
const request = require("request");

const filebuffer = fs.readFileSync("db/usda-nnd.sqlite3");

const db = new sqlite.Database(filebuffer);

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function getData(dbname, collection, res) {
	mongoClient.connect('mongodb://localhost:27017/' + dbname, function (err, db) {
		if (err) throw err

	    db.collection(collection).find().toArray(function (err, result) {
	    	if (err) throw err

	    	console.log(result)

	    	//	db.close();
	    	res.json(result);
	    })
	})
}

function getBudgetData(res) {
	mongoClient.connect('mongodb://localhost:27017/finance', function (err, db) {
		if (err) throw err

	    db.collection("budgetGroups").find().toArray(function (err, groups) {
	    	if (err) throw err

	        var groupLookup = []
	        groups.forEach((group, idx) => {
	            group.categories.forEach((category, idx) => {
	                category.data = []
	                for(let i = 0; i < 12; i++) {
	                    var values = new Object();
	                    values.budget = 0
	                    values.actual = 0
	                    values.diff = 0
	                    category.data[i] = values
	                }
	                var key = group.name + ":" + category.id
	                groupLookup[key] = category.data
	                //console.log(category)
	            });
	            //console.log(group)
	        });
	        //console.log(groupLookup)

	        db.collection("categories").find().toArray(function (err, categories) {
		    	if (err) throw err

	            var categoryLookup = []
	            categories.forEach((category, idx) => {
	                if(category.budgetCategory !== undefined) {
	                    var key = category.name
	                    if(category.subCategory != null) key += ":" + category.subCategory
	                    //console.log(category)
	                    //console.log(key)
	                    categoryLookup[key] = category.budgetCategory
	                }
	            });
	            //console.log(categoryLookup)

	            db.collection("transaction").find().toArray(function (err, transactions) {
			    	if (err) throw err

	                transactions.forEach((transaction, idx) => {
                        var month, day, year;
                        [month, day, year] = transaction.date.split("/")
                        if(year !== "2016") return

                        var key = categoryLookup[transaction.category]
	                    if(key !== undefined) {
	                        var type = key.split(":")[1].substring(0, 1)
	                        var amount = (type === "i") ? transaction.raw.credit : transaction.raw.debit
	                        amount = amount.replace(",", "")
	                        //console.log("BUDGET CATEGORY: " + transaction.category)
	                        //console.log("KEY: " + key)
	                        month -= 1
	                        var budgetCategory = groupLookup[key]
	                        budgetCategory[month].actual = math.add(budgetCategory[month].actual, amount).toFixed(2)
	                        //console.log(budgetCategory)
	                    }
	                });

			    	//	db.close();
			    	res.json(groups);
			    })
		    })
	    })
	})
}

app.get("/api/transactions", (req, res) => {
	getData("finance", "transaction", res);
});

app.get("/api/budgetGroups", (req, res) => {
	getData("finance", "budgetGroups", res);
});

app.get("/api/budgetData", (req, res) => {
	getBudgetData(res);
});

app.get("/api/bills", (req, res) => {
	getData("finance", "bills", res);
});

app.get("/api/accounts", (req, res) => {
	getData("finance", "account", res);
});

app.get("/api/payees", (req, res) => {
	getData("finance", "payees", res);
});

app.get("/api/documents", (req, res) => {
	var path = '/opt';
	var files = fs.readdirSync(path);
	console.log(files);
	fs.readdir(path, function(err, items) {
	    for (var i=0; i<items.length; i++) {
	        var file = path + '/' + items[i];
            console.log(file);
	        console.log("Start: " + file);
	 
	        fs.stat(file, function(err, stats) {
	            console.log(file);
	            console.log(stats["size"]);
	            console.log(stats);
	        });
	    }
	});
});

app.get("/api/records", (req, res) => {
    var options = {
        uri : 'http://server-501:8081/listUsers',
        method : 'GET'
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        	console.log(body);
            res.json(body);
        }
    });
});

app.listen(app.get("port"), () => {
	console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
