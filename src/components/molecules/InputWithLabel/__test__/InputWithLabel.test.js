import React from 'react';
import InputWithLabel from '../InputWithLabel';

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
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should not render label if label is undefined or null', () => {
		const wrapperDiv = inputWithLabel().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should render label if label prop is defined', () => {
		props.label="anyLabel";
		const wrapperDiv = inputWithLabel().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should pass placeholder prop to Input', () => {
		props.placeholder = "placeholder";
		const Input = inputWithLabel().find('Input').first();
		expect(toJSON(Input)).toMatchSnapshot();
	});

	it('should pass onInputChange prop to Input if onInputChange is defined', () => {
		props.onInputChange = jest.fn();
		const Input = inputWithLabel().find('Input').first();
		expect(Input.props().onInputChange).toBe(props.onInputChange);
	});

	it('should pass () => {} as onInputChange to Input if onInputChange is not defined', () => {
		const Input = inputWithLabel().find('Input').first();
		expect(Input.props().onInputChange).toString('() => {}');
	});
});
