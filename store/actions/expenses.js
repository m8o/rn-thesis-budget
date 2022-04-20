export const ADD_NEW = "ADD_NEW";

export const addNewExpense = (expense) => {
	return { type: ADD_NEW, data: expense };
};

export const setFilters = (filterSettings) => {
	return { type: SET_FILTERS, filters: filterSettings };
};
