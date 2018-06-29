import generatedState from '../performance/stateGenerator';
import {getTodoInfo} from "./reducers/tabs/todoInfo";

export const parseStringifiedDate = (state) => {
	const todoInfo = {};
	Object
		.keys(state.tabs.todoInfo)
		.forEach(todoId => {
			const info = state.tabs.todoInfo[todoId];
			todoInfo[todoId] = {
				...info,
				createdTime: new Date(info.createdTime),
				completedTime: info.completedTime ? new Date(info.completedTime) : undefined
			};
		});
	state.tabs.todoInfo = todoInfo;
	return state;
};

export const loadState = () => {
	// return generatedState;

	try {
		const serializedState = localStorage.getItem('FinalTodo');
		if (serializedState === null)
			return undefined;
		const parsedState = JSON.parse(serializedState);
		return parseStringifiedDate(parsedState);
	}
	catch (err) {
		console.log(err);
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('FinalTodo', serializedState);
	}
	catch (err) {
		console.log("State is not serializable");
	}
};
