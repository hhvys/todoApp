import {shallow, configure} from 'enzyme';
import React from 'react';
import InputWithLabel from '../InputWithLabel';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('InputWithLabel', () => {

	let props;
	let mountedInputWithLabel;

	const inputWithLabel = () => {
		if(!mountedInputWithLabel) {
			mountedInputWithLabel = shallow(
				<InputWithLabel {...props}/>
			);
		}
		return mountedInputWithLabel;
	};

	beforeEach(() => {
		props = {
			className: undefined,
			label: undefined,
			placeholder: undefined,
			onInputChange: undefined,
			onSubmit: undefined,
		};
		mountedInputWithLabel = undefined;
	});

	it('should pass className prop to wrapper div', () => {
		props.className = "randomClass";
		const divs = inputWithLabel().find('div');
		const wrapperDiv = divs.first();
		expect(wrapperDiv.props().className).toMatch(props.className);
	});

	it('should not render label if label is undefined or null', () => {
		const wrapperDiv = inputWithLabel().find('div').first();
		expect(wrapperDiv.find('label').length).toBe(0);
	});

	it('should render label if label prop is defined', () => {
		props.label="anyLabel";
		const wrapperDiv = inputWithLabel().find('div').first();
		expect(wrapperDiv.find('label').length).toBe(1);
	});

	it('should pass placeholder prop to Input', () => {
		props.placeholder = "placeholder";
		const Input = inputWithLabel().find('Input').first();
		expect(Input.props().placeholder).toBe(props.placeholder);
	});

	it('should pass onInputChange prop to Input if onInputChange is defined', () => {
		props.onInputChange = jest.fn();
		const Input = inputWithLabel().find('Input').first();
		expect(Input.props().onInputChange).toBe(props.onInputChange);
	});

	it('should pass () => {} as onInputChange to Input if onInputChange is not defined', () => {
		const fn = jest.fn(() => {});
		const Input = inputWithLabel().find('Input').first();
		expect(Input.props().onInputChange).toString('() => {}');
	});
});
