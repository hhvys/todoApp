import {STARRED_ID} from "../src/actions/actionTypes";

const {v4} = require('node-uuid');
const {INBOX_ID, SORT_BY} = require("../src/actions/actionTypes");

const store = {};
const NTABS = 10;
const NTODOS = 100;

store.activeTab = INBOX_ID;
store.collapsedSideBar = false;
store.modalActive = {
	isOpened: false,
	todoId: undefined
};
store.searchQuery = '';
store.sortBy = SORT_BY.SORT_CREATION;

const generateTabs = () => {
	const tabs = {
		todoById: {},
		tabInfo: [
			{
				tabId: INBOX_ID,
				tabName: 'Inbox',
				todos: [],
				starredTodos: [],
				inCompletedTodos: 0
			},
			{
				tabId: STARRED_ID,
				tabName: 'Starred',
				todos: [],
				starredTodos: [],
				inCompletedTodos: 0
			}
		]
	};
	let time = new Date();
	for (let i = 0; i < NTABS; i++) {
		const tabId = v4();
		const tabName = `Tab ${i}`;
		const tabToAdd = {
			tabId,
			tabName,
			todos: [],
			starredTodos: [],
			inCompletedTodos: NTODOS
		};
		for (let j = 0; j < NTODOS; j++) {
			const todoId = v4();
			tabToAdd.todos.push(todoId);
			tabs.todoById[todoId] = {
				tabId,
				todoId,
				text: `Todo ${j}`,
				createdTime: time++,
			};
		}
		tabs.tabInfo.push(tabToAdd);
	}
	return tabs;
};

store.tabs = generateTabs();

export default store;
