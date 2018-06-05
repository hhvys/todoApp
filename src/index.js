import {render} from 'react-dom';
import React from 'react';
import configureStore from "./configureStore";
import Root from './components/Root';

const store = configureStore();

render(
	<Root store={store}/>,
	document.getElementById('root')
);
