import React from 'react';
import RowComponent from '../RowComponent';

describe('RowComponent', () => {

	let props;
	let mountedRowComponent;

	const rowComponent = () => {
		if(!mountedRowComponent) {
			mountedRowComponent = shallow(
				<RowComponent {...props}/>
			);
		}
		return mountedRowComponent;
	};

	beforeEach(() => {
		props = {
			className: undefined,
			headerClass: undefined,
			footerClass: undefined,
			onClick: undefined,
			onFooterSymbolClick: undefined,
			onHeaderSymbolClick: undefined,
			headerSymbol: undefined,
			footerSymbol: undefined,
			footerContent: undefined,
			mainContent: undefined,
			active: undefined,
			extraContent: undefined,
		};
		mountedRowComponent = undefined;
	});

	it('should render', () => {
		const wrapperDiv = rowComponent().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	describe('headerDiv', () => {
		it('should pass header props to headerDiv', () => {
			props.headerClass = "headerClass";
			props.onHeaderSymbolClick = jest.fn();
			props.headerSymbol = "headerLogo";

			const wrapperDiv = rowComponent().find('div').first();
			const headerDiv = wrapperDiv.children().first();

			expect(toJSON(headerDiv)).toMatchSnapshot();

		});
	});

	describe('mainDiv', () => {

		beforeEach(() => {
			props.mainContent = "mainContent";
		});

		it('should pass mainContent to contentDiv', () => {
			const wrapperDiv = rowComponent().find('div').first();
			const contentDiv = wrapperDiv.childAt(1);
			expect(toJSON(contentDiv)).toMatchSnapshot();
		});

		it('should render extraContent div if extraContent is defined', () => {
			props.extraContent = "extraContent";
			const wrapperDiv = rowComponent().find('div').first();
			const contentDiv = wrapperDiv.childAt(1);

			expect(toJSON(contentDiv)).toMatchSnapshot();
		});

	});

	describe('footerDiv', () => {

		beforeEach(() => {
			props.footerContent = "footerContent";
		});

		it('should pass footerContent to footerDiv', () => {
			const wrapperDiv = rowComponent().find('div').first();
			const footerDiv = wrapperDiv.childAt(2);
			expect(toJSON(footerDiv)).toMatchSnapshot();
		});

		it('should render footerIconDiv if footerSymbol is defined', () => {
			props.footerSymbol = "footerLogo";
			props.onFooterSymbolClick = jest.fn();
			props.footerClass = "footerClass";
			const wrapperDiv = rowComponent().find('div').first();
			const footerDiv = wrapperDiv.childAt(2);

			expect(toJSON(footerDiv)).toMatchSnapshot();
		});

	});


});
