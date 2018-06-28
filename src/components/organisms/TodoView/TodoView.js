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
												 onFooterSymbolClick,
												 onHeaderSymbolClick,
												 completed
											 }) => {

		return (
			todos
				.map(todo => {
					return (
						<RowComponent
							className={completed ? styles.completedTodo : styles.todo}
							key={todo.todoId}
							headerSymbol={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
							footerSymbol={todo.star ? STARRED : STAR}
							headerClass={styles.headerLogo}
							footerClass={styles.footerLogo}
							mainContent={todo.text}
							onFooterSymbolClick={() => onFooterSymbolClick(activeTab, todo.todoId)}
							onHeaderSymbolClick={() => onHeaderSymbolClick(activeTab, todo.todoId)}
							extraContent={completed ? todo.completionTime : null}
						/>
					);
				})
		);
	};

	renderCompletedTodos = ({
														todos,
														activeTab,
														onFooterSymbolClick,
														onHeaderSymbolClick
													}) => {
		return (
			<ScrollViewport rowHeight={46}>
				{
					this.renderVerticalTab({
						todos,
						activeTab,
						onFooterSymbolClick,
						onHeaderSymbolClick,
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
			onFooterSymbolClick,
			onHeaderSymbolClick,
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
					<ScrollViewport rowHeight={46}>
						{
							this.renderVerticalTab({
								todos: todos.filter(todo => !todo.completed),
								activeTab,
								onFooterSymbolClick,
								onHeaderSymbolClick,
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
							this.renderCompletedTodos({
								todos: todos.filter(todo => todo.completed),
								activeTab,
								onFooterSymbolClick,
								onHeaderSymbolClick
							}) :
							null
					}

				</div>


			</div>

		);
	}
}

export default TodoView;
