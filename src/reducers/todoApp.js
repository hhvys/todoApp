import {combineReducers} from 'redux';
import activeTab from './activeTab';
import collapsedSideBar from './collapsedSideBar';
import modalActive from './modalActive';
import tabs from './tabs';
import sortBy from './sortBy';
import searchQuery from './searchQuery';
import editEnabled from './editEnabled';

const todoApp = combineReducers({
	activeTab,
	collapsedSideBar,
	modalActive,
	tabs,
	sortBy,
	searchQuery,
	editEnabled
});

export default  todoApp;