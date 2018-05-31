import React from 'react';
import './CollapsedSideBar.css';
import Symbol from "../../atoms/logos/Symbol";
import Button from "../../atoms/Button/Button";
import CheckBox from "../../logos/CheckBox";

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


class CollapsedSideBar extends React.Component {

	renderListSymbols = (container) => {
		return (
			container.map(tab => {
				const {
					headerSymbol,
					style
				} = tab;
				return (
					<div className={"full-width d-flex align-items-center justify-content-center"} style={style}>
						<Symbol symbolType={headerSymbol} style={{fill: '#b9b9b9'}}/>
					</div>
				);
			})

		);
	};

	render() {
		const {className, ...props} = this.props;
		return (
			<div
				className={`div__collapsed__sidebar ${className ? className : ''} fixed d-flex flex-column align-items-center justify-content-start`}
				{...props}>
				<div className={"list-toggle full-width d-flex align-items-center justify-content-center"}>
					<Symbol symbolType={"listToggle"}/>
				</div>

				<div className={"tab-list full-width d-flex flex-column align-items-center justify-content-start"}>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol symbolType={"threeDots"}/>
					</div>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol symbolType={"threeDots"}/>
					</div>
				</div>

				<div className={"create-list full-width d-flex align-items-center justify-content-center"}>
					<Symbol symbolType={"plus"} style={{fill: '#328ad6'}}/>
				</div>
			</div>
		);
	}
}

export default CollapsedSideBar;