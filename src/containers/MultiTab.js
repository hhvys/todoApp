import {connect} from 'react-redux';
import MultiTabView from '../components/organisms/MultiTabView/MultiTabView';
import {
	addStarredTodo,
	changeActiveTab,
	changeSorting,
	searchQuery,
	toggleStarTodo,
	toggleTodo
} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";

const getFilteredTabs = (state) => {
	let tabs = getTabs(state);
	tabs = state.searchQuery.length ?
		tabs
			.map(tab => ({
				...tab,
				todos: tab
					.todos
					.filter(todo => !todo.completed && (new RegExp(state.searchQuery).test(todo.text)))
			})) :
		tabs
			.map(tab => ({
				...tab,
				todos: tab
					.starredTodos
					.filter(todo => !todo.completed)
			}));

	return tabs.filter(tab => tab.todos.length);
};

const mapStateToProps = (state) => {
	return {
		tabs: getFilteredTabs(state),
		searchQuery: getSearchQuery(state),
		activeTab: getActiveTab(state),
		collapsed: getCollapsedSideBar(state)
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		onFooterSymbolClick: (tabId, todoId) => dispatch(toggleStarTodo(tabId, todoId)),
		onHeaderSymbolClick: (tabId, todoId) => dispatch(toggleTodo(tabId, todoId)),
		onButtonClick: (tabId) => {
			dispatch(changeActiveTab(tabId));
			dispatch(searchQuery(''));
		},
		onInputSubmit: (value) => {
			dispatch(addStarredTodo(value));
			dispatch(changeSorting());
		}
	};
};

const MultiTab = connect(
	mapStateToProps,
	mapDispatchToProps
)(MultiTabView);

export default MultiTab;
