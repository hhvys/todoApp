import {connect} from 'react-redux';
import MultiTabView from '../components/organisms/MultiTabView/MultiTabView';
import {
	addStarredTodo,
	changeActiveTab,
	changeSorting,
	searchQuery,
	toggleStarTodo,
	toggleTodo
} from "../actions/actionCreators";
import {getTabsWithInfo} from "../reducers/tabs/tabs";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";

export const getFilteredTabs = (state) => {
	let tabs = getTabsWithInfo(state);
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
		onFooterIconClick: (tabId, todoId) => {
			dispatch(toggleStarTodo(tabId, todoId));
			dispatch(changeSorting(undefined, tabId));
		},
		onHeaderIconClick: (tabId, todoId) => {
			dispatch(toggleTodo(tabId, todoId));
			dispatch(changeSorting(undefined, tabId));
		},
		onButtonClick: (tabId) => {
			dispatch(changeActiveTab(tabId));
			dispatch(searchQuery(''));
			dispatch(changeSorting());
		},
		onInputSubmit: (value) => {
			dispatch(addStarredTodo(value));
			// dispatch(changeSorting());
		}
	};
};

const MultiTab = connect(
	mapStateToProps,
	mapDispatchToProps
)(MultiTabView);

export default MultiTab;
