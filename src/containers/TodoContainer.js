import {connect} from 'react-redux';
import TodoView from '../components/organisms/TodoView/TodoView';
import {addTodo, toggleStarTodo, toggleTodo, toggleVisibilityFilter} from "../actions/actionCreaters";

const mapStateToProps = (state) => {
	const todos = state.tabs
		.find(tab => tab.tabId === state.activeTab)
		.todos;
	console.log(todos);
	return ({
		todos,
		activeTab: state.activeTab,
		showCompleted: state.showCompletedTodo,
		sortBy: state.sortBy,
		collapsed: state.collapsedSideBar
	});
};

const mapDispatchToProps = (dispatch) => {
	return ({
		onHeaderSymbolClick: (tabId, todoId) => dispatch(toggleTodo(tabId, todoId)),
		onFooterSymbolClick: (tabId, todoId) => dispatch(toggleStarTodo(tabId, todoId)),
		onButtonClick: () => dispatch(toggleVisibilityFilter()),
		onInputSubmit: (tabId, value) => dispatch(addTodo(tabId, value))
	});
};

const TodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoView);

export default TodoContainer;