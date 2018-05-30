import React from 'react';
import InputTodo from './todoContent/InputTodo';
import TodoList from './todoContent/TodoList';
import CompletedTodo from './todoContent/CompletedTodo';
import {connect} from 'react-redux';
import SearchQuery from './todoContent/multiTab/SearchQuery';

let Container = ({className, query}) => (
	<div className={className}>
		<InputTodo className="input-todo"/>
		{
			query ?
				<div className="scroll"><SearchQuery/></div> :
				<div className="scroll">
					<TodoList className="todo-list"/>
					<CompletedTodo className="completed-todo todo-list" />
				</div>
		}
	</div>
);

const mapStateToProps = (state) => ({
	query: state.searchQuery
});

Container = connect(
	mapStateToProps
)(Container);

export default Container;