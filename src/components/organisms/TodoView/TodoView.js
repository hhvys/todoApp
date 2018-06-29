import React from 'react';
import styles from './TodoView.mod.scss';
import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import RowComponent from "../../molecules/RowComponent/RowComponent";
import Button from "../../atoms/Button/Button";
import {CHECK_BOX, CHECKED_CHECK_BOX, STARRED, STAR} from "../../atoms/Icons/constants";
import ScrollViewport from 'react-scroll-viewport';

class TodoView extends React.Component {


	renderVerticalTab = ({
												 todos,
												 activeTab,
												 onFooterIconClick,
												 onHeaderIconClick,
												 completed
											 }) => {

		return (
			todos
				.map(todo => {
					return (
						<RowComponent
							className={completed ? styles.completedTodo : styles.todo}
							key={todo.todoId}
							headerIcon={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
							footerIcon={todo.star ? STARRED : STAR}
							headerClass={styles.headerLogo}
							footerClass={styles.footerLogo}
							mainContent={todo.text}
							onFooterIconClick={onFooterIconClick}
							onHeaderIconClick={onHeaderIconClick}
							footerClickArgs={[activeTab, todo.todoId]}
							headerClickArgs={[activeTab, todo.todoId]}
							extraContent={completed ? todo.completionTime : null}
						/>
					);
				})
		);
	};

	renderCompletedTodos = () => {

		let {
			todos,
			activeTab,
			onFooterIconClick,
			onHeaderIconClick
		} = this.props;
		todos = todos.filter(todo => todo.completed)
		return (
			<ScrollViewport rowHeight={48}>
				{
					this.renderVerticalTab({
						todos,
						activeTab,
						onFooterIconClick,
						onHeaderIconClick,
						completed: true
					})
				}
			</ScrollViewport>);
	};

	render() {
		const {
			collapsed,
			className,
			todos,
			activeTab,
			onFooterIconClick,
			onHeaderIconClick,
			onButtonClick,
			showCompleted,
			onInputSubmit,
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
					<ScrollViewport rowHeight={48}>
						{
							this.renderVerticalTab({
								todos: todos.filter(todo => !todo.completed),
								activeTab,
								onFooterIconClick,
								onHeaderIconClick,
								completed: false
							})
						}
					</ScrollViewport>
				</div>

				<Button className={"mt-3"}
								text={showCompleted ? "HIDE COMPLETED TO-DOS" : "SHOW COMPLETED TO-DOS"}
								onClick={() => onButtonClick(activeTab)}/>

				<div className={"mt-3"}>
					{
						showCompleted ?
							this.renderCompletedTodos() :
							null
					}
				</div>


			</div>

		);
	}
}

export default TodoView;
