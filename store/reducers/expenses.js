import { ADD_NEW } from "../actions/expenses";

const initialState = [
	{ date: new Date(), amount: "1", categoryId: 1, note: "ads" },
];

const expenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW:
			const updatedExpenses = [...state, action.data];
			return updatedExpenses;
		default:
			break;
	}
	return state;
};

export default expenseReducer;
