import {connect} from 'react-redux';
import MultiTabView from "./MultiTabView";
import {changeActiveTab, toggleStarTodo, toggleTodo, searchQuery} from "../../../../../../actions/actionCreaters";

const mapStateToProps = (state) => ({
	tabs: state
		.tabs
		.map(tab => ({
			...tab,
			todos: tab
				.todos
				.filter(todo => !todo.completed && (new RegExp(state.searchQuery).test(todo.text)))
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

const SearchQuery = connect(
	mapStateToProps,
	mapDispatchToProps
)(MultiTabView);

export default SearchQuery;