import React from 'react';
import TodoView from '../TodoView';

describe('TodoView', () => {
	let props;
	let mountedTodoView;

	const todoView = () => {
		if (!mountedTodoView) {
			mountedTodoView = shallow(
				<TodoView {...props}/>
			);
		}
		return mountedTodoView;
	};

	beforeEach(() => {
		props = {
			collapsed: false,
			className: "className",
			todos: [],
			activeTab: undefined,
			onFooterSymbolClick: jest.fn(),
			onHeaderSymbolClick: jest.fn(),
			onButtonClick: jest.fn(),
			showCompleted: false,
			onInputSubmit: jest.fn(),
		};
		mountedTodoView = undefined;
	});

	it('should have collapsed class if collapsed is true', () => {
		props.collapsed = true;
		const wrapperDiv = todoView().find('div').first();
		expect(wrapperDiv.props().className).toMatch('collapsed');
	});

	it('should not have collapsed class if collapsed is false', () => {
		props.collapsed = false;
		const wrapperDiv = todoView().find('div').first();
		expect(wrapperDiv.props().className).not.toMatch('collapsed');
	});

	it('should have number of RowComponents = todos.length if showCompleted is true', () => {
		const RowComponents = todoView().find('RowComponent');
		expect(RowComponents.length).toBe(props.todos.length);
	});

	it('should have number of RowComponents = uncompleted todos.length if showCompleted is false', () => {
		const wrapperDiv = todoView().find('div').first();
		const completedTodoDiv = wrapperDiv.find('div').last();
		const RowComponents = completedTodoDiv.find('RowComponent');
		const uncompletedTodos = props.todos.filter(todo => todo.completed).length;
		expect(RowComponents.length).toBe(uncompletedTodos);
	});

	describe('InputWithLabel', () => {
		it('should render InputWithLabel', () => {
			const InputWithLabel = todoView().find('InputWithLabel');
			expect(InputWithLabel.length).toBe(1);
		});
	});

	describe('Button', () => {
		it('should render Button', () => {
			const Button = todoView().find('Button');
			expect(Button.length).toBe(1);
		});
	});

});
