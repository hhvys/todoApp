import React from 'react';
import RowComponent from "../../molecules/RowComponent/RowComponent";
import {INBOX_ID, STARRED_ID} from "../../../actions/actionTypes";
import {INBOX, STAR} from "../../atoms/Icons/constants";
import styles from './ListContainerView.mod.scss';

class ListContainerView extends React.Component {

	renderTabs = ({
												 activeTab,
												 tabs,
												 onClick,
												 onHeaderSymbolClick,
												 onFooterSymbolClick,
												 headerSymbol,
												 footerSymbol
											 }) => {
		return (
			tabs.map(tab => {
				if (!tab.footerContent && tab.tabId === STARRED_ID)
					return null;
				return (
					<RowComponent
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
							tab.footerContent > 0 && tab.footerContent
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
					this.renderTabs(this.props)
				}
			</div>
		);
	}
}

export default ListContainerView;
