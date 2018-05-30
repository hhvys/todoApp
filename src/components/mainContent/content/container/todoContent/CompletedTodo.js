import {connect} from 'react-redux';
import {
	toggleTodo,
	toggleStarTodo, activeTodo
} from '../../../../../actions/actionCreaters';
import CompletedTodoView from './CompletedTodoView';

const mapStateToProps = (state) => ({
	todos: state
			.tabs
			.find(tab => tab.tabId === state.activeTab)
			.todos,
	activeTab: state.activeTab,
	showCompleted: state.showCompletedTodo,
	completedTime: state.completedTime,
	sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
	onCheck: (activeTab, todoId) => dispatch(toggleTodo(activeTab, todoId)),
	onStar: (activeTab, todoId) => dispatch(toggleStarTodo(activeTab, todoId)),
	onTodoClick: (tabId, todoId) => dispatch(activeTodo(tabId, todoId))
});

const CompletedTodo=connect(
	mapStateToProps,
	mapDispatchToProps
)(CompletedTodoView);

export default CompletedTodo;