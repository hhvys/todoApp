import {combineReducers} from 'redux';
import activeTab from './activeTab';
import collapsedSideBar from './collapsedSideBar';
import modalActive from './modalActive';
import tabs from './tabs/tabs';
import sortBy from './sortBy';
import searchQuery from './searchQuery';

const todoApp = combineReducers({
	activeTab,
	collapsedSideBar,
	modalActive,
	tabs,
	sortBy,
	searchQuery
});

export default  todoApp;
