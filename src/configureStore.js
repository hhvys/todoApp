import {throttle} from 'lodash';
import {loadState, parseStringifiedDate, saveState} from "./localStorage";
import todoApp from "./reducers";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {STATE_WITH_TABS} from "./reducers/__test__/__fixtures__/reducers.fixtures";
import {getTabsWithInfo} from "./reducers/tabs/tabs";
// import persistedState from '../performance/stateGenerator';

const configureStore = () => {
	const persistedState = parseStringifiedDate(STATE_WITH_TABS);
	// console.log(persistedState);
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
	}, 500));

	return store;
};

export default configureStore;
