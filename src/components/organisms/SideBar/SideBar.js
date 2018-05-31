import React from 'react';
import './SideBar.css';
import SearchBar from "../../molecules/SearchBar/SearchBar";
import VerticalTabContainer from "../VerticalTabContainer/VerticalTabContainer";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";

const container = [
	{
		onClick: () => console.log('clicked'),
		onHeaderSymbolClick: () => console.log('headerClicked'),
		onFooterSymbolClick: () => console.log('footerClicked'),
		headerSymbol: 'listSymbol',
		// footerSymbol: 'pencil',
		mainContent: 'tab1',
		style: {height: 38},
		footerContent: 4
	},
	{
		onClick: () => console.log('clicked'),
		onHeaderSymbolClick: () => console.log('headerClicked'),
		onFooterSymbolClick: () => console.log('footerClicked'),
		headerSymbol: 'listSymbol',
		footerSymbol: 'pencil',
		mainContent: 'tab1',
		style: {height: 38},
		active: true,
		footerContent: 4
	},
	{
		onClick: () => console.log('clicked'),
		onHeaderSymbolClick: () => console.log('headerClicked'),
		onFooterSymbolClick: () => console.log('footerClicked'),
		headerSymbol: 'listSymbol',
		footerSymbol: 'pencil',
		mainContent: 'tab1',
		style: {height: 38},
		footerContent: 4
	},
];


class SideBar extends React.Component {

	render() {
		const {className, ...props} = this.props;
		return (
			<div
				className={`div__sidebar ${className ? className : ''} d-flex flex-column align-items-center justify-content-center`}
				{...props}>
				<SearchBar
					onChange={() => console.log('changed')}
					style={{
						height: 45,
						minHeight: 45,
						backgroundColor: '#5B795A'
					}}/>
				<VerticalTabContainer container={container}
															style={{
																backgroundColor: '#F7F7F7',
																width: 280,
																overflowY: 'auto',
																overflowX: 'hidden',
																flex: 1
															}}/>
				<VerticalTab headerSymbol={"plus"}
										 mainContent={"Create List"}
										 style={{
											 height: 42,
											 minHeight: 42,
											 backgroundColor: '#F7F7F7',
											 borderTop: '1px solid #e0e0df',
											 color: '#328ad6',
											 fontWeight: 'bold',
											 fill: '#328ad6'
										 }}/>
			</div>
		);
	}
}

export default SideBar;