import {render} from 'react-dom';
import React from 'react';
import configureStore from "./configureStore";
import Root from './components/Root';

(async () => {
	const store = await configureStore();

	render(
		<Root store={store}/>,
		document.getElementById('root')
	);
})();
