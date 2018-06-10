import React from 'react';
import styles from './TodoView.scss';
import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import Button from "../../atoms/Button/Button";
import {CHECK_BOX, CHECKED_CHECK_BOX, STARRED, STAR} from "../../atoms/logos/constants";
import {SORT_BY} from "../../../actions/actionTypes";

class TodoView extends React.Component {

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
	renderVerticalTab = ({
												 todos,
												 activeTab,
												 onFooterSymbolClick,
												 onHeaderSymbolClick,
												 completed,
												 sortBy
											 }) => {

		return (
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
				.map(todo => {

					return (
						<VerticalTab
							className={completed ? styles.completedTodo : styles.todo}
							key={todo.todoId}
							headerSymbol={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
							footerSymbol={todo.star ? STARRED : STAR}
							headerClass={styles.headerLogo}
							footerClass={styles.footerLogo}
							mainContent={todo.text}
							onFooterSymbolClick={() => onFooterSymbolClick(activeTab, todo.todoId)}
							onHeaderSymbolClick={() => onHeaderSymbolClick(activeTab, todo.todoId)}
							extraContent={completed ? this.getCompletionTime(todo.completedTime) : null}
						/>
					);
				})
		);
	};

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
		const {
			collapsed,
			className,
			todos,
			activeTab,
			onFooterSymbolClick,
			onHeaderSymbolClick,
			onButtonClick,
			showCompleted,
			onInputSubmit,
			sortBy,
			...props
		} = this.props;

		return (
			<div
				className={`${className ? className : ''} ${collapsed ? styles.collapsed : ''} ${styles.todoView} full-height d-flex flex-column justify-content-start mr-3`} {...props}>
				<InputWithLabel
					className={styles.input}
					label={"+"}
					placeholder={"Add a to-do..."}
					onSubmit={(value) => onInputSubmit(activeTab, value)}
				/>

				<div className={"mt-3"}>
					{this.renderVerticalTab({
						todos: todos.filter(todo => !todo.completed),
						activeTab,
						onFooterSymbolClick,
						onHeaderSymbolClick,
						completed: false,
						sortBy
					})}

				</div>

				<Button className={"mt-3"}
								text={showCompleted ? "HIDE COMPLETED TO-DOS" : "SHOW COMPLETED TO-DOS"}
								onClick={() => onButtonClick(activeTab)}/>

				<div className={"mt-3"}>
					{showCompleted && this.renderVerticalTab({
						todos: todos.filter(todo => todo.completed),
						activeTab,
						onFooterSymbolClick,
						onHeaderSymbolClick,
						completed: true,
						sortBy,
					})}
				</div>


			</div>

		);
	}
}

export default TodoView;
