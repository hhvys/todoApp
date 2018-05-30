import React from 'react';
import Star from '../../../../logos/Star';
import Starred from '../../../../logos/Starred';
import {SORT_BY} from "../../../../../actions/actionTypes";
import CheckedCheckBox from "../../../../logos/CheckedCheckBox";
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



class CompletedTodoView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: new Date()
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				currentTime: new Date()
			});
		}, 65000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (<div className={
								this.props.showCompleted ?
									'completed-todo todo-list' :
									'completed-todo todo-list hide'
							}
						>
							<ul>
								{this.listCompletedTodo(this.props.onCheck, this.props.todos, this.props.activeTab, this.props.onStar, this.props.completedTime, this.props.sortBy, this.props.onTodoClick)}
							</ul>
					</div>
		)
	}

	timeDetails = (completedTime) => {
		let timeDiff = Math.abs(this.state.currentTime - Date.parse(completedTime)) / 1000;

		switch (true) {
			case (timeDiff < 60):
				return 'A few seconds ago';
			case (timeDiff < 120):
				return 'A minute ago';
			case (timeDiff < 3600):
				return Math.ceil((timeDiff - 60) / 60).toString() + ' minutes ago';
			case (timeDiff < 7200):
				return 'An hour ago';
			default:
				return Math.ceil((timeDiff - 3600) / 3600).toString() + ' hours ago';
		}
	};

	listCompletedTodo = (onCheck, todos, activeTab, onStar, completedTime, sortBy, onTodoClick) => (
		todos
			.filter(todo => todo.completed)
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
					<li className={className + "todo pl-3 d-flex justify-content-between"} key={todo.todoId} onClick={() => onTodoClick(activeTab, todo.todoId)}>
						<div className="d-flex align-items-center">
							<CheckedCheckBox onClick={() => onCheck(activeTab, todo.todoId)}/>
							<div className="d-flex todo-content flex-column">
								<div className="todo-text">
									{todo.text}
								</div>
								<div className="time">
									{
										this.timeDetails(todo.completedTime)
									}
								</div>
							</div>
						</div>
						<div className="pr-3">
							{renderStar(todo.star, onStar, activeTab, todo.todoId)}

						</div>
					</li>
					);
				}
			)
	);

}

export default CompletedTodoView;