import React from 'react';
import Header from '../Header';

describe('Header', () => {

	let props;
	let mountedHeader;

	const header = () => {
		if (!mountedHeader) {
			mountedHeader = shallow(
				<Header {...props}/>
			);
		}
		return mountedHeader;
	};

	beforeEach(() => {
		props = {
			collapsed: undefined,
			className: "ClassName",
			headerContent: undefined,
			onDropDownButtonClick: undefined,
			onDropDownTabClick: undefined,
		};
		mountedHeader = undefined;
	});

	it('should render', () => {
		const wrapperDiv = header().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should have collapsed class when collapsed is true', () => {
		props.collapsed = true;
		const contentDiv = header().find('div').first().childAt(0);
		expect(contentDiv.props().className).toMatch('collapsed');
	});

	it('should not have collapsed when collapsed is not true', () => {
		props.collapsed = false;
		const contentDiv = header().find('div').first().childAt(0);
		expect(contentDiv.props().className).not.toMatch('collapsed');
	});

	it('should pass headerContent to contentDiv', () => {
		props.headerContent = "headerContent";
		const contentDiv = header().find('div').first().childAt(0);
		const div = contentDiv.childAt(0);
		expect(contentDiv.childAt(0).props().children).toBe(props.headerContent);
	});

});
