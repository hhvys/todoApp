import {Provider} from 'react-redux'
import App from '../containers/App';
import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/Lato.css';

const Root = ({store}) => (
	<Provider store={store}>
		<App/>
	</Provider>
);

export default Root;
