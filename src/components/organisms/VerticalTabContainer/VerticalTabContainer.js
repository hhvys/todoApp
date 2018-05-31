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


class VerticalTabContainer extends React.Component {

	renderVerticalTab = (container) => {
		return (
			container.map(tab => {
				const {
					onClick,
					onHeaderSymbolClick,
					onFooterSymbolClick,
					headerSymbol,
					footerSymbol,
					footerContent,
					mainContent,
					active,
					...props
				} = tab;
				console.log({...props});
				return (
					<VerticalTab
						onClick={onClick}
						onHeaderSymbolClick={onHeaderSymbolClick}
						onFooterSymbolClick={onFooterSymbolClick}
						headerSymbol={headerSymbol}
						footerSymbol={footerSymbol}
						footerContent={footerContent}
						mainContent={mainContent}
						active={active}
						{...props}
					/>
				);
			})
		);
	};

	render() {
		const {container, ...restProps} = this.props;
		return (
			<div className={" flex-column justify-content-start align-items-center"} {...restProps}>
				{this.renderVerticalTab(container)}
			</div>
		);
	}
}

export default VerticalTabContainer;