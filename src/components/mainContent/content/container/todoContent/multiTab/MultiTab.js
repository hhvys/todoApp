import {connect} from 'react-redux';
import MultiTabView from './index';
import {changeActiveTab, toggleStarTodo, toggleTodo, searchQuery} from "../../../../../../actions/actionCreaters";

const mapStateToProps = (state) => ({
	tabs: state
		.tabs
		.map(tab => ({
			...tab,
			todos: tab
				.todos
				.filter(todo => todo.star && !todo.completed)
		}))
		.filter(tab => tab.todos.length)
});

const mapDispatchToProps = (dispatch) => ({
	onTabClick: (tabId) => {
		dispatch(changeActiveTab(tabId));
		dispatch(searchQuery(''));
	},
	onStarClick: (tabId, todoId) => dispatch(toggleStarTodo(tabId, todoId)),
	onCheckClick: (tabId, todoId) => dispatch(toggleTodo(tabId, todoId))
});

const MultiTab = connect(
	mapStateToProps,
	mapDispatchToProps
)(MultiTabView);

export default MultiTab;

