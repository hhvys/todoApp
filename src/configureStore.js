import {throttle} from 'lodash';
import {loadState, saveState} from "./localStorage";
import todoApp from "./reducers";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = () => {
	const persistedState = loadState();
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(
		todoApp,
		persistedState,
		composeEnhancers(
			applyMiddleware(
				thunk,
				logger
			)
		)
	);

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
