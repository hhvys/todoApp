import React from 'react';
import CheckBox from '../../../../../logos/CheckBox';
import '../../../../../logos/logos.css';
import Star from '../../../../../logos/Star';
import Starred from "../../../../../logos/Starred";
import CheckedCheckBox from "../../../../../logos/CheckedCheckBox";
import './multiTab.css';
import '../../../../../logos/logos.css';
import Message from './Message';

const renderList = (todos, tabId, {onStarClick, onCheckClick}) => (
	todos.map(todo => (
		<li className="todo pl-3 d-flex justify-content-between" key={todo.todoId}>
			<div className="d-flex align-items-center">
				{
					todo.completed ?
						<CheckedCheckBox onClick={() => onCheckClick(tabId, todo.todoId)}/> :
						<CheckBox onClick={() => onCheckClick(tabId, todo.todoId)}/>
				}
				<div className="todo-content txt-overflow">{todo.text}</div>
			</div>
			<div className="pr-3">
				{
					todo.star ?
						<Starred onClick={() => onStarClick(tabId, todo.todoId)}/> :
						<Star onClick={() => onStarClick(tabId, todo.todoId)}/>
				}
			</div>
		</li>
	))
);

const renderContent = ({tabs, onTabClick, ...props}) => {
	console.log(tabs.length);
	if(!tabs.length)
		return <Message
								message="No Search Result"
								className="not-found"	/>
	return tabs.map(tab => (
		<div key={tab.tabId}>
			<div className="multi-tab-button mt-3" onClick={() => onTabClick(tab.tabId)}>
				{tab.tabName}
			</div>
			<div className="multi-tab-content">
				<ul className="mt-2">
					{renderList(tab.todos, tab.tabId, props)}
				</ul>
			</div>

		</div>
	))
};

const MultiTabView = (props) => {
	return (
		<div>
			{renderContent(props)}
		</div>
	);
};

export default MultiTabView;