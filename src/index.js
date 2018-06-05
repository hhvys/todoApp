import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import App from './containers/App';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/Lato.css';
import todoApp from './reducers';
import {loadState, saveState} from './localStorage';


const persistedState = loadState();

export const store = createStore(
	todoApp,
	persistedState
);

store.subscribe(() => {
	const state = store.getState();
	saveState({
		tabs: state.tabs,
		sortBy: state.sortBy
	});
});


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
