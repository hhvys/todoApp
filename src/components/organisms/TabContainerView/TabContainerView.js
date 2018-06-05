import React from 'react';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {INBOX_ID, STARRED_ID} from "../../../actions/actionTypes";
import {INBOX, STAR} from "../../atoms/logos/constants";

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
						key={tab.tabId}
						style={{
							height: 38
						}}
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

						footerSymbol={activeTab === tab.tabId &&
						activeTab !== INBOX_ID &&
						activeTab !== STARRED_ID &&
						footerSymbol}

						footerContent={
							footerContent > 0 && footerContent
						}
						footerProps={{
							style: {}
						}}
						mainContent={tab.tabName}
						active={activeTab === tab.tabId}
						headerProps={{
							style: {
								fill: tab.tabId === INBOX_ID ?
									'rgb(50, 138, 214)' :
									tab.tabId === STARRED_ID ?
										'red' :
										'#b9b9b9'
							}
						}}

					/>
				);
			})
		);
	};

	render() {
		const {style} = this.props;
		return (
			<div className={" flex-column justify-content-start align-items-center"} style={style}>
				{this.renderVerticalTab(this.props)}
			</div>
		);
	}
}

export default TabContainerView;