import React from 'react';
import RowComponent from "../../molecules/RowComponent/RowComponent";
import {INBOX_ID, STARRED_ID} from "../../../actions/actionTypes";
import {INBOX, STAR} from "../../atoms/Icons/constants";
import styles from './ListContainerView.mod.scss';
import ScrollViewPort from 'react-scroll-viewport';

class ListContainerView extends React.Component {

	renderTabs = () => {
		const {
			activeTab,
			tabs,
			onClick,
			onHeaderIconClick,
			onFooterIconClick,
			headerIcon,
			footerIcon
		} = this.props;
		return (
			tabs.map(tab => {
				if (!tab.footerContent && tab.tabId === STARRED_ID)
					return null;
				return (
					<RowComponent
						className={`${styles.tab} ${activeTab === tab.tabId ? styles.active : ''}`}
						key={tab.tabId}
						onClick={() => onClick(tab.tabId)}
						onHeaderIconClick={onHeaderIconClick}
						onFooterIconClick={onFooterIconClick}
						footerClickArgs={[tab.tabId]}
						headerIcon={
							tab.tabId === INBOX_ID ?
								INBOX :
								tab.tabId === STARRED_ID ?
									STAR :
									headerIcon
						}

						footerIcon={
							activeTab === tab.tabId &&
							activeTab !== INBOX_ID &&
							activeTab !== STARRED_ID &&
							footerIcon
						}

						footerContent={
							tab.footerContent
						}
						mainContent={tab.tabName}
						headerClass={
							`${styles.icon} ${
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
				{/*<ScrollViewPort rowHeight={35} sync={true}>*/}
				{this.renderTabs()}
				{/*</ScrollViewPort>*/}
			</div>
		);
	}
}

export default ListContainerView;
