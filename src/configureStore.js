import {throttle} from 'lodash';
import {loadState, saveState} from "./localStorage";
import todoApp from "./reducers";
import {createStore} from 'redux'


const addLoggingToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = rawDispatch(action);
		console.log('%c next state', 'color: green', store.getState());
		console.groupEnd();
		return returnValue;
	}
};

const configureStore = () => {
	const persistedState = loadState();

	const store = createStore(
		todoApp,
		persistedState
	);

	store.dispatch = addLoggingToDispatch(store);

	store.subscribe(throttle(() => {
		const state = store.getState();
		saveState({
			tabs: state.tabs,
			sortBy: state.sortBy
		});
	}), 500);

	return store;
};

export default configureStore;
