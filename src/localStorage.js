export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('FinalTodo');
		if (serializedState === null)
			return undefined;
		return JSON.parse(serializedState);
	}
	catch (err) {
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
