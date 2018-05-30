import {connect} from 'react-redux';
import InputTodoView from './InputTodoView';
import {addTodo, addStarredTodo} from '../../../../../actions/actionCreaters';

const mapStateToProps = (state) => ({
	tabId: state.activeTab,
	query: state.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
	onTodoSubmit: (tabId, text) => {
		tabId === 1 ?
			dispatch(addStarredTodo(0, text)) :
			dispatch(addTodo(tabId, text))
	}
});

const InputTodo = connect(
	mapStateToProps,
	mapDispatchToProps
)(InputTodoView);

export default InputTodo;