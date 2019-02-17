/* eslint-disable no-undef */

function getTransactions(cb) {
	return getResponse2('api/transactions', cb);
}

function getBills(cb) {
	return getResponse2('api/bills', cb);
}

function getAccounts(cb) {
	return getResponse2('api/accounts', cb);
}

function getBudgetGroups(cb) {
	return getResponse2('api/budgetGroups', cb);
}

function getBudgetData(cb) {
	return getResponse2('api/budgetData?year=2016', cb);
}

function getPayees(cb) {
	return getResponse2('api/payees', cb);
}

function getRecords(cb) {
	return getResponse('api/records', cb);
}

function testFetch(cb) {
	fetch('http://localhost:3001/api/payees', {
        accept: "application/json",
		mode: 'no-cors' // 'cors' by default
	})
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getResponse(path, cb) {
    return callFetch(path, cb);
}

function getResponse2(path, cb) {
    return callFetch('http://server-501:3001/' + path, cb);
}

function callFetch(path, cb) {
    return fetch(path, {
        accept: "application/json"
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
	console.log(response);
  return response.json();
}

const Client = { testFetch, getTransactions, getBills, getAccounts, getBudgetGroups, getBudgetData, getPayees, getRecords };
export default Client;
