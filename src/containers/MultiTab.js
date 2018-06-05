import {connect} from 'react-redux';
import MultiTabView from '../components/organisms/MultiTabView/MultiTabView';
import {addStarredTodo, changeActiveTab, searchQuery, toggleStarTodo, toggleTodo} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getSortBy} from "../reducers/sortBy";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";

const mapStateToProps = (state) => {
	const tabs = getTabs(state);
	return {
		tabs,
		sortBy: getSortBy(state),
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
		}
	};
};

const MultiTab = connect(
	mapStateToProps,
	mapDispatchToProps
)(MultiTabView);

export default MultiTab;
