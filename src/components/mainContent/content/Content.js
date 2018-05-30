import React from 'react';
import Header from './header/Header';
import Container from './container';
import './content.css';

const Content = () => (
	<div className="content">
		<Header className="header fixed"/>
		<Container className="container1"/>
	</div>
);

export default Content;