import {
	ADD_TODO,
	ADD_STARRED_TODO,
	TOGGLE_TODO,
	STAR_TOGGLE_TODO,
	ACTIVE_TODO
} from "../actions/actionTypes";

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return (
				[
					...state,
					{
						todoId: action.todoId,
						text: action.text,
						completed: false,
						star: false,
						completedTime: undefined,
						createdTime: new Date(),
						active: false
					}
				]);
		case ADD_STARRED_TODO:
			return (
				[
					...state,
					{
						todoId: action.todoId,
						text: action.text,
						completed: false,
						star: true,
						completedTime: undefined,
						createdTime: new Date(),
						active: false
					}
				]);
		case TOGGLE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						completed: !todo.completed,
						completedTime: new Date()
					} :
					todo
			));
		case STAR_TOGGLE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						star: !todo.star
					} :
					todo
			));
		case ACTIVE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						active: true
					} :
					{
						...todo,
						active: false
					}
			));
		default:
			return state;
	}
};

export default todos;