import React from 'react';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {INBOX_ID, STARRED_ID} from "../../../actions/actionTypes";
import {INBOX, STAR} from "../../atoms/logos/constants";
import styles from './TabContainerView.scss';

class TabContainerView extends React.Component {

	renderVerticalTab = ({
												 activeTab,
												 tabs,
												 onClick,
												 onHeaderSymbolClick,
												 onFooterSymbolClick,
												 headerSymbol,
												 footerSymbol,
												 footerContent
											 }) => {

		return (
			tabs.map(tab => {
				footerContent = tab.todos
					.filter(todo => !todo.completed)
					.length;
				if (tab.tabId === STARRED_ID) {
					footerContent = tabs.reduce((totalStarred, tab) => {
						const tabStarred = tab.todos.reduce((starred, todo) => starred + (todo.star && !todo.completed), 0);
						return totalStarred + tabStarred;
					}, 0);
					if (footerContent === 0)
						return null;
				}
				return (
					<VerticalTab
						className={styles.tab}
						key={tab.tabId}
						onClick={() => onClick(tab.tabId)}
						onHeaderSymbolClick={onHeaderSymbolClick}
						onFooterSymbolClick={() => onFooterSymbolClick(tab.tabId)}
						headerSymbol={
							tab.tabId === INBOX_ID ?
								INBOX :
								tab.tabId === STARRED_ID ?
									STAR :
									headerSymbol
						}

						footerSymbol={
							activeTab === tab.tabId &&
							activeTab !== INBOX_ID &&
							activeTab !== STARRED_ID &&
							footerSymbol
						}

						footerContent={
							footerContent > 0 && footerContent
						}
						mainContent={tab.tabName}
						active={activeTab === tab.tabId}
						headerClass={
							`${styles.logo} ${
								tab.tabId === INBOX_ID ?
									styles.inboxLogo :
									tab.tabId === STARRED_ID ?
										styles.starLogo :
										styles.listLogo
								}`
						}
						footerClass={styles.footerLogo}
					/>
				);
			})
		);
	};

	render() {
		const {className} = this.props;
		return (
			<div className={`${className ? className : ''} flex-column justify-content-start align-items-center`}>
				{
					this.renderVerticalTab(this.props)
				}
			</div>
		);
	}
}

export default TabContainerView;
