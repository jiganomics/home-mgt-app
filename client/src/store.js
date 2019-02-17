import { createStore } from "redux";
import checkbook from "./tabs/checking/checkbookReducer";

const counter = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		default:
			return state;
	}
}

const counter2 = (state = 0, action) => {
	switch(action.type) {
		case 'INCREMENT2':
			return state + 1;
		default:
			return state;
	}
}

const financeApp = (state = {}, action) => {
	return {
		counter: counter(state.counter, action),
		counter2: counter2(state.counter2, action),
		checkbook: checkbook(state.checkbook, action)
	};
};

const store = createStore(financeApp);

console.log(store.getState());

export default store;