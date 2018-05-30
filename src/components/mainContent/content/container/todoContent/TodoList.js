import {connect} from 'react-redux';
import {
			toggleTodo,
			toggleVisibilityFilter,
			toggleStarTodo,
			activeTodo
		} from '../../../../../actions/actionCreaters';
import TodoListView from './TodoListView';

const mapStateToProps = (state) => ({
	todos: state
			.tabs
			.find(tab => tab.tabId === state.activeTab)
			.todos,
	activeTab: state.activeTab,
	showCompleted: state.showCompletedTodo,
	sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
	onCheck: (activeTab, todoId) => dispatch(toggleTodo(activeTab, todoId)),
	onButtonClick: () => dispatch(toggleVisibilityFilter()),
	onStar: (activeTab, todoId) => dispatch(toggleStarTodo(activeTab, todoId)),
	onTodoClick: (tabId, todoId) => {
		dispatch(activeTodo(tabId, todoId));
	}
});

const TodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListView);

export default TodoList;