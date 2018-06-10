import React from 'react';
import Button from "../../atoms/Button/Button";
import styles from './MultiTabView.mod.scss';
import {CHECK_BOX, CHECKED_CHECK_BOX} from "../../atoms/logos/constants";
import VerticalTab from '../../molecules/VerticalTab/VerticalTab';
import {INBOX_ID, SORT_BY} from "../../../actions/actionTypes"
import {STARRED, STAR} from "../../atoms/logos/constants";
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';
import NotFound from '../../molecules/NotFound/NotFound';

class MultiTabView extends React.Component {


	renderVerticalTab = ({
												 todos,
												 tabId,
												 onFooterSymbolClick,
												 onHeaderSymbolClick,
												 sortBy,
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
												 className={styles.todo}
												 headerSymbol={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
												 footerSymbol={todo.star ? STARRED : STAR}
												 headerClass={styles.logo}
												 footerClass={styles.logo}
												 mainContent={todo.text}
												 onFooterSymbolClick={() => onFooterSymbolClick(tabId, todo.todoId)}
												 onHeaderSymbolClick={() => onHeaderSymbolClick(tabId, todo.todoId)}
						/>
					);
				})
		);
	};

	renderTabs({
							 tabs,
							 onFooterSymbolClick,
							 onHeaderSymbolClick,
							 sortBy,
							 onButtonClick,
							 searchQuery
						 }) {
		tabs = searchQuery.length !== 0 ?
			tabs
				.map(tab => ({
					...tab,
					todos: tab
						.todos
						.filter(todo => !todo.completed && (new RegExp(searchQuery).test(todo.text)))
				})) :
			tabs
				.map(tab => ({
					...tab,
					todos: tab
						.starredTodos
						.filter(todo => !todo.completed)
				}));

		tabs = tabs.filter(tab => tab.todos.length);

		if (tabs.length === 0 && searchQuery.length === 0)
			onButtonClick(INBOX_ID);

		if (tabs.length === 0)
			return (<NotFound/>);

		return tabs.map(tab => (
			<div key={tab.tabId}>
				<Button text={tab.tabName.toLocaleUpperCase()}
								className={"mt-4 mb-2"}
								onClick={() => onButtonClick(tab.tabId)}/>
				{
					this.renderVerticalTab({
						todos: tab.todos,
						tabId: tab.tabId,
						onFooterSymbolClick,
						onHeaderSymbolClick,
						sortBy
					})
				}
			</div>
		))
	}

	render() {
		const {
			tabs,
			sortBy,
			onHeaderSymbolClick,
			onFooterSymbolClick,
			searchQuery,
			activeTab,
			onButtonClick,
			collapsed,
			onInputSubmit
		} = this.props;
		return (
			<div className={`${styles.multiTabView} ${collapsed ? styles.collapsed : ''} mr-3`}>
				{
					searchQuery.length === 0 ?
						<InputWithLabel
							label={"+"}
							placeholder={"Add a starred to-do in Inbox..."}
							style={{fontSize: 16}}
							onSubmit={(value) => onInputSubmit(value)}
						/> :
						null
				}
				{this.renderTabs({
					tabs,
					sortBy,
					onHeaderSymbolClick,
					onFooterSymbolClick,
					searchQuery,
					activeTab,
					onButtonClick
				})}
			</div>
		);
	}
}

export default MultiTabView;
