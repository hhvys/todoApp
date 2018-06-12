import {connect} from 'react-redux';
import {addTodo, changeSorting, toggleStarTodo, toggleTodo, toggleVisibilityFilter} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";
import TodosContainer from '../components/organisms/TodoView/TodoContainer';

const mapStateToProps = (state) => {
	const tabs = getTabs(state);
	const activeTab = getActiveTab(state);
	const todos = tabs
		.find(tab => tab.tabId === activeTab)
		.todos;
	return ({
		todos,
		activeTab,
		showCompleted: tabs
			.find(tab => tab.tabId === activeTab)
			.showCompletedTodo,
		collapsed: getCollapsedSideBar(state)
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		onHeaderSymbolClick: (tabId, todoId) => dispatch(toggleTodo(tabId, todoId)),
		onFooterSymbolClick: (tabId, todoId) => {
			dispatch(toggleStarTodo(tabId, todoId));
			dispatch(changeSorting());
		},
		onButtonClick: (tabId) => dispatch(toggleVisibilityFilter(tabId)),
		onInputSubmit: (tabId, value) => {
			dispatch(addTodo(tabId, value));
			dispatch(changeSorting());
		}
	});
};

const TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodosContainer);

export default TodoContainer;
