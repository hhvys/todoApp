import React from 'react';
import PropTypes from 'prop-types';
import Star from '../../../../logos/Star';
import Starred from '../../../../logos/Starred';
import {SORT_BY} from "../../../../../actions/actionTypes";
import CheckBox from "../../../../logos/CheckBox";
import MultiTab from './multiTab/MultiTab';
import '../../../../logos/logos.css';

const renderStar = (star, onStar, activeTab, todoId) => {
	return star ?
		<Starred 
			onClick={() => onStar(activeTab, todoId)}
		/> : 
		<Star 
			onClick={() => onStar(activeTab, todoId)}
		/>
};

let liNode;

const handleClick = (onCheck, tabId, todoId) => {
	onCheck(tabId, todoId);
	// liNode.classList.add('disappear');
	// setTimeout(() => {
	//
	// }, 500);
};

const todoList = (todos, onCheck, activeTab, onStar, sortBy, onTodoClick) => (
	todos
		.filter(todo => !todo.completed)
		.sort((a, b) => {
			switch (sortBy) {
				case SORT_BY.SORT_PRIORITY:
					if(a.star && !b.star)
						return -1;
					if(b.star && !a.star)
						return 1;
					return 0;
				case SORT_BY.SORT_CREATION:
					return a.createdTime < b.createdTime ? -1 : 1;
				case SORT_BY.SORT_ALPHA:
					return a.text.localeCompare(b.text);
			}
		})
		.map(todo => {
				let className = todo.active ? "active " : "";
				return (
					<li ref={node => liNode=node} className={className + "todo pl-3 d-flex justify-content-between"} onClick={() => onTodoClick(activeTab, todo.todoId)}
						key={todo.todoId}>
						<div className="d-flex align-items-center">
							<CheckBox onClick={() => handleClick(onCheck, activeTab, todo.todoId)}/>
							<div className="todo-content">{todo.text}</div>
						</div>
						<div className="pr-3">
							{renderStar(todo.star, onStar, activeTab, todo.todoId)}

						</div>
					</li>
				);
			}
		)
);

const renderTabContent = ({
														todos,
														onCheck,
														className,
														activeTab,
														showCompleted,
														onButtonClick,
														onStar,
														sortBy,
														onTodoClick
													}) => (
	<div className={className}>
		<ul>
			{todoList(todos, onCheck, activeTab, onStar, sortBy, onTodoClick)}
		</ul>
		<button
			className={
				showCompleted
					? "show-completed"
					: ""
			}
			onClick={onButtonClick}>
		</button>
	</div>
);

const renderStarred = () => {
	return <MultiTab/>
};

const TodoListView = ({activeTab, ...props}) => (
						activeTab === 1 ? renderStarred({activeTab, ...props}) : renderTabContent({activeTab, ...props})
);

TodoListView.propType = {
	onCheck: PropTypes.func.isRequired,
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			todoId: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	).isRequired
};

export default TodoListView;