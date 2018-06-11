import React from 'react';
import TodoView from "./TodoView";
import {SORT_BY} from "../../../actions/actionTypes";

class TodoContainer extends React.Component {

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

	sortTodos = (todos, sortBy) => (
		todos
			.sort((a, b) => {
				switch (sortBy) {
					case SORT_BY.SORT_PRIORITY:
						if (a.star && !b.star)
							return -1;
						if (!a.star && b.star)
							return 1;
						return 0;

					case SORT_BY.SORT_CREATION:
						if (a.completedTime > b.completedTime)
							return -1;
						return 1;

					case SORT_BY.SORT_ALPHA:
						if (a.text < b.text)
							return -1;
						return 1;
				}

			})
	);

	getCompletionTime = (completedTime) => {
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

	addCompletionTime = (todos) => (
		todos
			.map(todo => ({
				...todo,
				completionTime: this.getCompletionTime(todo.completedTime)
			}))
	);

	render() {
		let {todos, sortBy, ...props} = this.props;
		todos = this.sortTodos(todos, sortBy);
		todos = this.addCompletionTime(todos);
		return (
			<TodoView
				todos={todos}
				{...props}
			/>
		);
	}
}

export default TodoContainer;
