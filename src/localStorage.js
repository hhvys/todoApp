import generatedState from '../performance/stateGenerator';

export const parseStringifiedDate = (state) => {
	state
		.tabs
		.todoInfo
		.forEach(todo => {
			todo.createdTime = Date.parse(todo.createdTime);
			if(todo.completedTime)
				todo.completedTime = Date.parse(todo.completedTime);
		});
};

export const loadState = () => {
	return generatedState;

	try {
		const serializedState = localStorage.getItem('FinalTodo');
		if (serializedState === null)
			return undefined;
		const parsedState = JSON.parse(serializedState);
		return parseStringifiedDate(parsedState);
	}
	catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	// try {
	// 	const serializedState = JSON.stringify(state);
	// 	localStorage.setItem('FinalTodo', serializedState);
	// }
	// catch (err) {
	// 	console.log("State is not serializable");
	// }
};
