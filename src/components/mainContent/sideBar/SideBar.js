import React from 'react';
import SearchBar from './searchBar/SearchBar';
import TabList from './tabList/TabList';
import CreateList from './createList/CreateList';
import './sideBar.css';

const SideBar = () => {
	return (
		<div className="side-bar fixed">
			<SearchBar className="search-bar"/>
			<TabList className="tab-list"/>
			<CreateList className="create-list"/>
		</div>
	);
};

export default SideBar;