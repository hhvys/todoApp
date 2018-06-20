import React from 'react';
import TodoView from "./TodoView";

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

	getCompletionTime = (completedTime) => {
		if(!completedTime)
			return undefined;

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
		let {todos, ...props} = this.props;
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
