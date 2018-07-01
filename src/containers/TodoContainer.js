import {connect} from 'react-redux';
import {addTodo, changeSorting, toggleStarTodo, toggleTodo, toggleVisibilityFilter} from "../actions/actionCreaters";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";
import TodosContainer from '../components/organisms/TodoView/TodoContainer';
import {getTodoInfo} from "../reducers/tabs/todoInfo";
import {getTabInfo} from "../reducers/tabs/tabInfo";

const mapStateToProps = (state) => {
	const tabs = getTabInfo(state);
	const activeTab = getActiveTab(state);
	let todos = tabs
		.find(tab => tab.tabId === activeTab)
		.todos;
	todos = getTodoInfo(state, todos);
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
		onHeaderIconClick: (tabId, todoId) => {
			dispatch(toggleTodo(tabId, todoId));
			dispatch(changeSorting());
		},
		onFooterIconClick: (tabId, todoId) => {
			dispatch(toggleStarTodo(tabId, todoId));
			dispatch(changeSorting());
		},
		onButtonClick: (tabId) => {
			dispatch(toggleVisibilityFilter(tabId));
			dispatch(changeSorting());
		},
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
