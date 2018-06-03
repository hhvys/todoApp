import React from 'react';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";

// const container = [
// 	{
// 		onClick: () => console.log('clicked'),
// 		onHeaderSymbolClick: () => console.log('headerClicked'),
// 		onFooterSymbolClick: () => console.log('footerClicked'),
// 		headerSymbol: 'listSymbol',
// 		footerSymbol: 'pencil',
// 		mainContent: 'tab1',
// 		height: 38
// 	},
// 	{
// 		onClick: () => console.log('clicked'),
// 		onHeaderSymbolClick: () => console.log('headerClicked'),
// 		onFooterSymbolClick: () => console.log('footerClicked'),
// 		headerSymbol: 'listSymbol',
// 		footerSymbol: 'pencil',
// 		mainContent: 'tab1',
// 		height: 38,
// 		active: true
// 	},
// ];


class TabContainerView extends React.Component {

	renderVerticalTab = ({
												 activeTab,
												 tabs,
												 onClick,
												 onHeaderSymbolClick,
												 onFooterSymbolClick,
												 headerSymbol,
												 footerSymbol,
												 footerContent,
												 ...props
											 }) => {
		return (
			tabs.map(tab => {

				return (
					<VerticalTab
						onClick={onClick}
						onHeaderSymbolClick={onHeaderSymbolClick}
						onFooterSymbolClick={onFooterSymbolClick}
						headerSymbol={headerSymbol}
						footerSymbol={footerSymbol}
						footerContent={footerContent}
						mainContent={tab.tabName}
						active={activeTab === tab.tabId}
						headerProps={{
							style: {
								fill: '#b9b9b9'
							}
						}}
						{...props}
					/>
				);
			})
		);
	};

	render() {
		const {tabs, ...restProps} = this.props;
		console.log(tabs);
		return (
			<div className={" flex-column justify-content-start align-items-center"} {...restProps}>
				{this.renderVerticalTab(this.props)}
			</div>
		);
	}
}

export default TabContainerView;