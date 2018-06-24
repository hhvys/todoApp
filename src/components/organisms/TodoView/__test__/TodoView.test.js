import React from 'react';
import TodoView from '../TodoView';
import TodoContainer from "../TodoContainer";

describe('components', () => {
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
				expect(todoView()).toMatchSnapshot();
			});
		});

	});

	describe('TodoContainer', () => {

		describe('getCompletionTime', () => {

			it('should return "A few seconds ago" ', () => {
				const completedTime = new Date();
				const todoContainer = new TodoContainer({});
				todoContainer.state = {
					currentTime: new Date(completedTime.getTime() + 15 * 1000)
				};
				expect(todoContainer.getCompletionTime(completedTime)).toBe('A few seconds ago');
			});

			it('should return "A minute ago" ', () => {
				const completedTime = new Date();
				const todoContainer = new TodoContainer({});
				todoContainer.state = {
					currentTime: new Date(completedTime.getTime() + 70 * 1000)
				};
				expect(todoContainer.getCompletionTime(completedTime)).toBe('A minute ago');
			});

			it('should return "15 minutes ago" ', () => {
				const completedTime = new Date();
				const todoContainer = new TodoContainer({});
				todoContainer.state = {
					currentTime: new Date(completedTime.getTime() + 15 * 60000)
				};
				expect(todoContainer.getCompletionTime(completedTime)).toBe('15 minutes ago');
			});

			it('should return "An hour ago" ', () => {
				const completedTime = new Date();
				const todoContainer = new TodoContainer({});
				todoContainer.state = {
					currentTime: new Date(completedTime.getTime() + 65 * 60000)
				};
				expect(todoContainer.getCompletionTime(completedTime)).toBe('An hour ago');
			});

			it('should return "2 hours ago" ', () => {
				const completedTime = new Date();
				const todoContainer = new TodoContainer({});
				todoContainer.state = {
					currentTime: new Date(completedTime.getTime() + 145 * 60000)
				};
				expect(todoContainer.getCompletionTime(completedTime)).toBe('2 hours ago');
			});

		});

	});

});

