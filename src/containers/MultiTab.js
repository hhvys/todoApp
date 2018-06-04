import {connect} from 'react-redux';
import MultiTabView from '../components/organisms/MultiTabView/MultiTabView';
import {addStarredTodo, changeActiveTab, toggleStarTodo, toggleTodo} from "../actions/actionCreaters";

const mapStateToProps = (state) => {

	return {
		tabs: state.tabs,
		sortBy: state.sortBy,
		searchQuery: state.searchQuery,
		activeTab: state.activeTab,
		collapsed: state.collapsedSideBar
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		onFooterSymbolClick: (tabId, todoId) => dispatch(toggleStarTodo(tabId, todoId)),
		onHeaderSymbolClick: (tabId, todoId) => dispatch(toggleTodo(tabId, todoId)),
		onButtonClick: (tabId) => dispatch(changeActiveTab(tabId)),
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