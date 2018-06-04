import React from 'react';
import './TodoView.css';
import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import Button from "../../atoms/Button/Button";
import {CHECK_BOX, CHECKED_CHECK_BOX, STARRED, STAR} from "../../atoms/logos/constants";
import {SORT_BY} from "../../../actions/actionTypes";

class TodoView extends React.Component {

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
						<VerticalTab key={todo.todoId}
												 headerSymbol={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
												 footerSymbol={todo.star ? STARRED : STAR}
												 headerProps={{
													 style: {
														 marginLeft: 10
													 }
												 }}
												 footerProps={{
													 style: {
														 marginRight: 10
													 }
												 }}
												 mainContent={todo.text}
												 style={{
													 marginTop: 2,
													 backgroundColor: '#F7F7F7',
													 borderRadius: '5px',
													 height: 46,
													 opacity: completed ? 0.4 : 1
												 }}

												 onFooterSymbolClick={() => onFooterSymbolClick(activeTab, todo.todoId)}
												 onHeaderSymbolClick={() => onHeaderSymbolClick(activeTab, todo.todoId)}
						/>
					);
				})
		);
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
			sortBy,
			...props
		} = this.props;

		return (
			<div
				className={`${className ? className : ''} ${collapsed ? 'collapsed' : ''} div__todo__view full-height d-flex flex-column justify-content-start mr-3`} {...props}>
				<InputWithLabel
					label={"+"}
					placeholder={"Add a to-do..."}
					style={{fontSize: 16}}
					onSubmit={(value) => onInputSubmit(activeTab, value)}
				/>

				<div className={"incomplete-todos mt-3"}>
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
								onClick={onButtonClick}/>

				<div className={"completed-todos mt-3"}>
					{showCompleted && this.renderVerticalTab({
						todos: todos.filter(todo => todo.completed),
						activeTab,
						onFooterSymbolClick,
						onHeaderSymbolClick,
						completed: true,
						sortBy
					})}
				</div>


			</div>

		);
	}
}

export default TodoView;
