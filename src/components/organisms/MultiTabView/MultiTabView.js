import React from 'react';
import Button from "../../atoms/Button/Button";
import styles from './MultiTabView.mod.scss';
import {CHECK_BOX, CHECKED_CHECK_BOX} from "../../atoms/Icons/constants";
import RowComponent from '../../molecules/RowComponent/RowComponent';
import {INBOX_ID} from "../../../actions/actionTypes"
import {STARRED, STAR} from "../../atoms/Icons/constants";
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';
import BackgroundMessage from '../../molecules/BackgroundMessage/BackgroundMessage';

class MultiTabView extends React.Component {


	renderVerticalTab = ({
												 todos,
												 tabId,
												 onFooterIconClick,
												 onHeaderIconClick,
											 }) => {

		return (
			todos
				.map(todo => {

					return (
						<RowComponent key={todo.todoId}
													className={styles.todo}
													headerIcon={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
													footerIcon={todo.star ? STARRED : STAR}
													headerClass={styles.headerLogo}
													footerClass={styles.footerLogo}
													mainContent={todo.text}
													onFooterIconClick={onFooterIconClick}
													headerClickArgs={[tabId, todo.todoId]}
													footerClickArgs={[tabId, todo.todoId]}
													onHeaderIconClick={onHeaderIconClick}
						/>
					);
				})
		);
	};

	renderTabs({
							 tabs,
							 onFooterIconClick,
							 onHeaderIconClick,
							 onButtonClick,
							 searchQuery
						 }) {
		if (tabs.length === 0 && searchQuery.length === 0)
			onButtonClick(INBOX_ID);

		if (tabs.length === 0)
			return (<BackgroundMessage message={"No Search Results"}/>);

		return tabs.map(tab => (

			<div key={tab.tabId}>
				<Button text={tab.tabName.toLocaleUpperCase()}
								className={"mt-4 mb-2"}
								onClick={() => onButtonClick(tab.tabId)}
				/>
				{
					this.renderVerticalTab({
						todos: tab.todos,
						tabId: tab.tabId,
						onFooterIconClick,
						onHeaderIconClick
					})
				}
			</div>
		))
	}

	render() {
		const {
			tabs,
			onHeaderIconClick,
			onFooterIconClick,
			searchQuery,
			onButtonClick,
			collapsed,
			onInputSubmit
		} = this.props;
		return (
			<div className={`${styles.multiTabView} ${collapsed ? styles.collapsed : ''} mr-3`}>
				{
					searchQuery.length === 0 ?
						<InputWithLabel
							className={styles.input}
							label={"+"}
							placeholder={"Add a starred to-do in Inbox..."}
							onSubmit={(value) => onInputSubmit(value)}
						/> :
						null
				}
				{
					this.renderTabs({
						tabs,
						onHeaderIconClick,
						onFooterIconClick,
						searchQuery,
						onButtonClick
					})
				}
			</div>
		);
	}
}

export default MultiTabView;
