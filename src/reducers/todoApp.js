import {combineReducers} from 'redux';
import activeTab from './activeTab';
import collapsedSideBar from './collapsedSideBar';
import modalActive from './modalActive';
import showCompletedTodo from './showCompletedTodo';
import tabs from './tabs';
import editEnabled from './editEnabled';
import sortBy from './sortBy';
import searchQuery from './searchQuery';

const todoApp = combineReducers({
	activeTab,
	collapsedSideBar,
	modalActive,
	showCompletedTodo,
	tabs,
	editEnabled,
	sortBy,
	searchQuery
});

export default  todoApp;