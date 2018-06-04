import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import App from './containers/App';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/Lato.css';
import todoApp from './reducers';

const initialState = JSON.parse(localStorage.getItem('FinalTodo')) || undefined;

export const store = createStore(todoApp, initialState);

store.subscribe(() => {
	localStorage.setItem('FinalTodo', JSON.stringify(store.getState()));
});

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);