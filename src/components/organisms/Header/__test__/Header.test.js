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
			onDropDownButtonClick: jest.fn(),
			onDropDownTabClick: jest.fn(),
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
		expect(contentDiv.childAt(0).props().children).toBe(props.headerContent);
	});

	describe('DropDown', () => {
		it('should pass onDropDownTabClick as onTabClick to DropDown', () => {
			header().setState({
				pushDown: true
			});
			header().update();
			const dropDown = header().find('DropDown');
			expect(dropDown.props().onTabClick).toBe(props.onDropDownTabClick);
		});
		it('should render DropDown if state.pushDown is true', () => {
			header().setState({
				pushDown: true
			});
			header().update();
			expect(header()).toMatchSnapshot();
		});

		it('should not render DropDown if state.pushDown is false', () => {
			header().setState({
				pushDown: false
			});
			header().update();
			expect(header()).toMatchSnapshot();
		});
	});

	it('should render DropDown on click', () => {
		const dropDownIcon = header().find('DropDownIcon');
		expect(header()).toMatchSnapshot();
		dropDownIcon.simulate('click', {
			preventDefault: () => {
			},
			stopPropagation: () => {
			}
		});
		header().update();
		expect(header()).toMatchSnapshot();
	});

	it('should not render DropDown if clicked twice', () => {
		const dropDownIcon = header().find('DropDownIcon');
		expect(header()).toMatchSnapshot();
		const mockEvent = {
			preventDefault: () => {
			},
			stopPropagation: () => {
			}
		};
		dropDownIcon.simulate('click', mockEvent);
		dropDownIcon.simulate('click', mockEvent);
		header().update();
		expect(header()).toMatchSnapshot();
	});

	it('should pass onDropDownButtonClick as onClick to dropdownIcons', () => {
		const dropdownIcon = header().find('.dropdownIcons');
		expect(dropdownIcon.props().onClick).toBe(props.onDropDownButtonClick);
	});

	describe('dropdownIcons', () => {
		it('should call onDropDownButtonClick if clicked', () => {
			props.onDropDownButtonClick = jest.fn();
			const dropdownIcon = header().find('.dropdownIcons');
			const mockEvent = {
				preventDefault: () => {
				},
				stopPropagation: () => {
				}
			};
			dropdownIcon.simulate('click', mockEvent);
			expect(props.onDropDownButtonClick.mock.calls.length).toBe(1);
		})
	});

});
