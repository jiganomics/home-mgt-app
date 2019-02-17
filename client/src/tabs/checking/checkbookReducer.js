export default (state = {
			transaction: [],
			itemsPerPage: 20,
			startIndex: 0,
			endIndex: 20,
			totalPages: 1,
			currentPage: 1,
			visiblePages: 3
		},
		action) => {
	switch(action.type) {
		case 'SET_CHECKBOOK_DATA':
			let items = action.transactions.length;
			return {
			   ...state,
			   transactions: action.transactions,
			   startIndex: 0,
			   endIndex: 20,
			   totalPages: (items / state.itemsPerPage) + (((items % state.itemsPerPage) > 0) ? 1 : 0),
			   currentPage: 1
			};
		case 'CB_CURRENT_PAGE':
			return {
			   ...state,
			   startIndex: action.currentPage * state.itemsPerPage - state.itemsPerPage,
			   endIndex: action.currentPage * state.itemsPerPage - 1,
			   currentPage: action.currentPage
			};
		default:
			return state;
	}
};
