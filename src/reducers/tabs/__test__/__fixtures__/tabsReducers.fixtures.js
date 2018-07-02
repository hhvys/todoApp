import {STATE_WITH_TABS} from "../../../__test__/__fixtures__/reducers.fixtures";

export const TABS_INITIAL_STATE = {
	tabInfo: [{
		"inCompletedTodos": 0,
		"starredTodos": [],
		"tabId": 0,
		"tabName": "Inbox",
		"todos": []
	}, {"inCompletedTodos": 0, "starredTodos": [], "tabId": 1, "tabName": "Starred", "todos": []}],
	todoById: {}
};

export const TABS_STATE = STATE_WITH_TABS.tabs;

export const TOGGLE_STAR_TODO_STATE = {
	todoById: {
		'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd': {
			tabId: 0,
			todoId: 'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd',
			text: '1',
			createdTime: '2018-07-02T09:19:28.577Z'
		},
		'e8a6cc08-1402-4272-be1c-c5ecef01b8ad': {
			tabId: 0,
			todoId: 'e8a6cc08-1402-4272-be1c-c5ecef01b8ad',
			text: '2',
			createdTime: '2018-07-02T09:19:28.784Z'
		},
		'cab5c8ba-6b79-48e8-a124-417862125fce': {
			tabId: 0,
			todoId: 'cab5c8ba-6b79-48e8-a124-417862125fce',
			text: '3',
			createdTime: '2018-07-02T09:19:29.008Z',
			completedTime: '2018-07-02T09:23:31.761Z',
			completed: true
		},
		'f9f47212-02ee-4a95-91a5-cabe979a83e0': {
			tabId: 0,
			todoId: 'f9f47212-02ee-4a95-91a5-cabe979a83e0',
			text: '4',
			createdTime: '2018-07-02T09:19:29.288Z',
			completed: false,
			completedTime: '2018-07-02T09:23:38.901Z'
		},
		'33b67f02-d96b-46cf-8732-d7c02e11ca1a': {
			tabId: 0,
			todoId: '33b67f02-d96b-46cf-8732-d7c02e11ca1a',
			text: '2',
			star: true,
			createdTime: '2018-07-02T09:19:36.936Z',
			completed: false,
			completedTime: '2018-07-02T09:23:37.711Z'
		},
		'1ef87764-153d-45e0-825a-a8a846d9c93a': {
			tabId: 0,
			todoId: '1ef87764-153d-45e0-825a-a8a846d9c93a',
			text: '3',
			star: true,
			createdTime: '2018-07-02T09:19:37.153Z',
			completed: true,
			completedTime: '2018-07-02T09:23:36.284Z'
		},
		'13a10153-3315-4c39-8dc8-86591f1226e8': {
			tabId: 0,
			todoId: '13a10153-3315-4c39-8dc8-86591f1226e8',
			text: '4',
			star: true,
			createdTime: '2018-07-02T09:19:37.352Z',
			completed: true,
			completedTime: '2018-07-02T09:19:59.041Z'
		},
		'c00a197e-1083-4064-aeb4-765654c5c9f6': {
			tabId: 0,
			todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6',
			text: '5',
			star: false,
			createdTime: '2018-07-02T09:19:37.576Z',
			completed: true,
			completedTime: '2018-07-02T09:19:42.317Z'
		},
		'b926190b-41f4-42cf-9eb2-7c45fc910fa7': {
			tabId: 0,
			todoId: 'b926190b-41f4-42cf-9eb2-7c45fc910fa7',
			text: '65',
			star: false,
			createdTime: '2018-07-02T09:19:37.864Z',
			completedTime: '2018-07-02T09:23:31.434Z',
			completed: true
		},
		'7d66259e-7a2b-4a35-8492-9fe4735e3b1a': {
			tabId: 0,
			todoId: '7d66259e-7a2b-4a35-8492-9fe4735e3b1a',
			text: '1',
			star: false,
			createdTime: '2018-07-02T09:19:39.008Z'
		},
		'dec345bb-006c-4272-8d6a-83ca97b70bab': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'dec345bb-006c-4272-8d6a-83ca97b70bab',
			text: '1',
			createdTime: '2018-07-02T09:20:17.248Z'
		},
		'44776031-494c-4c7e-a27c-82ad435269d6': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: '44776031-494c-4c7e-a27c-82ad435269d6',
			text: '2',
			createdTime: '2018-07-02T09:20:17.472Z'
		},
		'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e',
			text: '3',
			createdTime: '2018-07-02T09:20:17.679Z',
			completedTime: '2018-07-02T09:39:39.150Z',
			completed: true
		},
		'e0d7d769-07fd-4aee-9e23-284ab3d44712': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'e0d7d769-07fd-4aee-9e23-284ab3d44712',
			text: '4',
			createdTime: '2018-07-02T09:20:17.928Z',
			completedTime: '2018-07-02T09:39:39.317Z',
			completed: true
		},
		'73bbd607-9d88-4358-991e-6015a5293b64': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: '73bbd607-9d88-4358-991e-6015a5293b64',
			text: '1',
			createdTime: '2018-07-02T09:39:22.151Z'
		},
		'ff4f941f-87a4-4682-87c7-4f1432b21328': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: 'ff4f941f-87a4-4682-87c7-4f1432b21328',
			text: '2',
			createdTime: '2018-07-02T09:39:22.519Z',
			completed: true,
			completedTime: '2018-07-02T09:39:25.985Z',
			star: true
		},
		'1c2d9f5f-edeb-4160-9ed5-7caaf908119e': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: '1c2d9f5f-edeb-4160-9ed5-7caaf908119e',
			text: '3',
			createdTime: '2018-07-02T09:39:23.422Z',
			star: true
		}
	},
	tabInfo: [
		{
			tabId: 0,
			tabName: 'Inbox',
			todos: [
				'7d66259e-7a2b-4a35-8492-9fe4735e3b1a',
				'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd',
				'33b67f02-d96b-46cf-8732-d7c02e11ca1a',
				'e8a6cc08-1402-4272-be1c-c5ecef01b8ad',
				'1ef87764-153d-45e0-825a-a8a846d9c93a',
				'cab5c8ba-6b79-48e8-a124-417862125fce',
				'13a10153-3315-4c39-8dc8-86591f1226e8',
				'f9f47212-02ee-4a95-91a5-cabe979a83e0',
				'c00a197e-1083-4064-aeb4-765654c5c9f6',
				'b926190b-41f4-42cf-9eb2-7c45fc910fa7'
			],
			starredTodos: [
				'33b67f02-d96b-46cf-8732-d7c02e11ca1a',
				'1ef87764-153d-45e0-825a-a8a846d9c93a',
				'13a10153-3315-4c39-8dc8-86591f1226e8'
			],
			inCompletedTodos: 5,
			showCompletedTodo: true
		},
		{
			tabId: 1,
			tabName: 'Starred',
			todos: [],
			starredTodos: [],
			inCompletedTodos: 2
		},
		{
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			tabName: '2',
			todos: [
				'dec345bb-006c-4272-8d6a-83ca97b70bab',
				'44776031-494c-4c7e-a27c-82ad435269d6',
				'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e',
				'e0d7d769-07fd-4aee-9e23-284ab3d44712'
			],
			starredTodos: [],
			inCompletedTodos: 2,
			showCompletedTodo: true
		},
		{
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			tabName: '1',
			todos: [
				'73bbd607-9d88-4358-991e-6015a5293b64',
				'ff4f941f-87a4-4682-87c7-4f1432b21328',
				'1c2d9f5f-edeb-4160-9ed5-7caaf908119e'
			],
			starredTodos: [
				'ff4f941f-87a4-4682-87c7-4f1432b21328',
				'1c2d9f5f-edeb-4160-9ed5-7caaf908119e'
			],
			inCompletedTodos: 2,
			showCompletedTodo: true
		}
	]
};

export const TABS_SORTBY_CREATION = {
	todoById: {
		'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd': {
			tabId: 0,
			todoId: 'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd',
			text: '1',
			createdTime: '2018-07-02T09:19:28.577Z'
		},
		'e8a6cc08-1402-4272-be1c-c5ecef01b8ad': {
			tabId: 0,
			todoId: 'e8a6cc08-1402-4272-be1c-c5ecef01b8ad',
			text: '2',
			createdTime: '2018-07-02T09:19:28.784Z'
		},
		'cab5c8ba-6b79-48e8-a124-417862125fce': {
			tabId: 0,
			todoId: 'cab5c8ba-6b79-48e8-a124-417862125fce',
			text: '3',
			createdTime: '2018-07-02T09:19:29.008Z',
			completedTime: '2018-07-02T09:23:31.761Z',
			completed: true
		},
		'f9f47212-02ee-4a95-91a5-cabe979a83e0': {
			tabId: 0,
			todoId: 'f9f47212-02ee-4a95-91a5-cabe979a83e0',
			text: '4',
			createdTime: '2018-07-02T09:19:29.288Z',
			completed: false,
			completedTime: '2018-07-02T09:23:38.901Z'
		},
		'33b67f02-d96b-46cf-8732-d7c02e11ca1a': {
			tabId: 0,
			todoId: '33b67f02-d96b-46cf-8732-d7c02e11ca1a',
			text: '2',
			star: true,
			createdTime: '2018-07-02T09:19:36.936Z',
			completed: false,
			completedTime: '2018-07-02T09:23:37.711Z'
		},
		'1ef87764-153d-45e0-825a-a8a846d9c93a': {
			tabId: 0,
			todoId: '1ef87764-153d-45e0-825a-a8a846d9c93a',
			text: '3',
			star: true,
			createdTime: '2018-07-02T09:19:37.153Z',
			completed: true,
			completedTime: '2018-07-02T09:23:36.284Z'
		},
		'13a10153-3315-4c39-8dc8-86591f1226e8': {
			tabId: 0,
			todoId: '13a10153-3315-4c39-8dc8-86591f1226e8',
			text: '4',
			star: true,
			createdTime: '2018-07-02T09:19:37.352Z',
			completed: true,
			completedTime: '2018-07-02T09:19:59.041Z'
		},
		'c00a197e-1083-4064-aeb4-765654c5c9f6': {
			tabId: 0,
			todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6',
			text: '5',
			star: true,
			createdTime: '2018-07-02T09:19:37.576Z',
			completed: true,
			completedTime: '2018-07-02T09:19:42.317Z'
		},
		'b926190b-41f4-42cf-9eb2-7c45fc910fa7': {
			tabId: 0,
			todoId: 'b926190b-41f4-42cf-9eb2-7c45fc910fa7',
			text: '65',
			star: false,
			createdTime: '2018-07-02T09:19:37.864Z',
			completedTime: '2018-07-02T09:23:31.434Z',
			completed: true
		},
		'7d66259e-7a2b-4a35-8492-9fe4735e3b1a': {
			tabId: 0,
			todoId: '7d66259e-7a2b-4a35-8492-9fe4735e3b1a',
			text: '1',
			star: false,
			createdTime: '2018-07-02T09:19:39.008Z'
		},
		'dec345bb-006c-4272-8d6a-83ca97b70bab': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'dec345bb-006c-4272-8d6a-83ca97b70bab',
			text: '1',
			createdTime: '2018-07-02T09:20:17.248Z'
		},
		'44776031-494c-4c7e-a27c-82ad435269d6': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: '44776031-494c-4c7e-a27c-82ad435269d6',
			text: '2',
			createdTime: '2018-07-02T09:20:17.472Z'
		},
		'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e',
			text: '3',
			createdTime: '2018-07-02T09:20:17.679Z',
			completedTime: '2018-07-02T09:39:39.150Z',
			completed: true
		},
		'e0d7d769-07fd-4aee-9e23-284ab3d44712': {
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			todoId: 'e0d7d769-07fd-4aee-9e23-284ab3d44712',
			text: '4',
			createdTime: '2018-07-02T09:20:17.928Z',
			completedTime: '2018-07-02T09:39:39.317Z',
			completed: true
		},
		'73bbd607-9d88-4358-991e-6015a5293b64': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: '73bbd607-9d88-4358-991e-6015a5293b64',
			text: '1',
			createdTime: '2018-07-02T09:39:22.151Z'
		},
		'ff4f941f-87a4-4682-87c7-4f1432b21328': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: 'ff4f941f-87a4-4682-87c7-4f1432b21328',
			text: '2',
			createdTime: '2018-07-02T09:39:22.519Z',
			completed: true,
			completedTime: '2018-07-02T09:39:25.985Z',
			star: true
		},
		'1c2d9f5f-edeb-4160-9ed5-7caaf908119e': {
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			todoId: '1c2d9f5f-edeb-4160-9ed5-7caaf908119e',
			text: '3',
			createdTime: '2018-07-02T09:39:23.422Z',
			star: true
		}
	},
	tabInfo: [
		{
			tabId: 0,
			tabName: 'Inbox',
			todos: [
				'7d66259e-7a2b-4a35-8492-9fe4735e3b1a',
				'b926190b-41f4-42cf-9eb2-7c45fc910fa7',
				'c00a197e-1083-4064-aeb4-765654c5c9f6',
				'13a10153-3315-4c39-8dc8-86591f1226e8',
				'1ef87764-153d-45e0-825a-a8a846d9c93a',
				'33b67f02-d96b-46cf-8732-d7c02e11ca1a',
				'f9f47212-02ee-4a95-91a5-cabe979a83e0',
				'cab5c8ba-6b79-48e8-a124-417862125fce',
				'e8a6cc08-1402-4272-be1c-c5ecef01b8ad',
				'a0165d2f-4707-4ea6-aa35-f1fbd07d34fd'
			],
			starredTodos: [
				'c00a197e-1083-4064-aeb4-765654c5c9f6',
				'13a10153-3315-4c39-8dc8-86591f1226e8',
				'1ef87764-153d-45e0-825a-a8a846d9c93a',
				'33b67f02-d96b-46cf-8732-d7c02e11ca1a'
			],
			inCompletedTodos: 5,
			showCompletedTodo: true
		},
		{
			tabId: 1,
			tabName: 'Starred',
			todos: [],
			starredTodos: [],
			inCompletedTodos: 2
		},
		{
			tabId: '18f4a48f-10c5-4208-9553-4874b52d8cfa',
			tabName: '2',
			todos: [
				'dec345bb-006c-4272-8d6a-83ca97b70bab',
				'44776031-494c-4c7e-a27c-82ad435269d6',
				'e1faa9e7-fd89-4b4f-a947-4e8e2afb318e',
				'e0d7d769-07fd-4aee-9e23-284ab3d44712'
			],
			starredTodos: [],
			inCompletedTodos: 2,
			showCompletedTodo: true
		},
		{
			tabId: '7e953655-42a7-4334-9b14-37625a96564f',
			tabName: '1',
			todos: [
				'73bbd607-9d88-4358-991e-6015a5293b64',
				'ff4f941f-87a4-4682-87c7-4f1432b21328',
				'1c2d9f5f-edeb-4160-9ed5-7caaf908119e'
			],
			starredTodos: [
				'ff4f941f-87a4-4682-87c7-4f1432b21328',
				'1c2d9f5f-edeb-4160-9ed5-7caaf908119e'
			],
			inCompletedTodos: 2,
			showCompletedTodo: true
		}
	]
};

export const COPY_TAB_ACTION = {
	type: 'COPY_TAB',
	starredTodos: [
		'086ec476-cc39-4560-bdc8-4754eae8fa61',
		'619a5aa4-41e6-4370-9329-c9cd0422b3b3'
	],
	todos: {
		'8da58a96-8373-4ced-a118-e305a6634cd1': {
			tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
			todoId: '8da58a96-8373-4ced-a118-e305a6634cd1',
			text: 'tab 2 3',
			createdTime: '2018-06-18T04:53:53.053Z'
		},
		'086ec476-cc39-4560-bdc8-4754eae8fa61': {
			tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
			todoId: '086ec476-cc39-4560-bdc8-4754eae8fa61',
			text: 'tab 2 6',
			createdTime: '2018-06-18T04:53:50.670Z',
			completed: true,
			completedTime: '2018-06-18T04:53:55.539Z',
			star: true
		},
		'3e827e5a-e546-4ab8-951f-ef7ee285120f': {
			tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
			todoId: '3e827e5a-e546-4ab8-951f-ef7ee285120f',
			text: 'tab 2 2',
			createdTime: '2018-06-18T04:53:47.757Z',
			completed: true,
			completedTime: '2018-06-18T04:53:57.656Z'
		},
		'619a5aa4-41e6-4370-9329-c9cd0422b3b3': {
			tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
			todoId: '619a5aa4-41e6-4370-9329-c9cd0422b3b3',
			text: 'tab 2 1',
			createdTime: '2018-06-18T04:53:43.581Z',
			star: true
		}
	},
	toId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
	tabName: '2nd tab Copy'
};

export const GET_TAB_INFO = [{
	"inCompletedTodos": 5,
	"showCompletedTodo": true,
	"starredTodos": ["33b67f02-d96b-46cf-8732-d7c02e11ca1a", "1ef87764-153d-45e0-825a-a8a846d9c93a", "13a10153-3315-4c39-8dc8-86591f1226e8", "c00a197e-1083-4064-aeb4-765654c5c9f6"],
	"tabId": 0,
	"tabName": "Inbox",
	"todos": ["7d66259e-7a2b-4a35-8492-9fe4735e3b1a", "a0165d2f-4707-4ea6-aa35-f1fbd07d34fd", "33b67f02-d96b-46cf-8732-d7c02e11ca1a", "e8a6cc08-1402-4272-be1c-c5ecef01b8ad", "1ef87764-153d-45e0-825a-a8a846d9c93a", "cab5c8ba-6b79-48e8-a124-417862125fce", "13a10153-3315-4c39-8dc8-86591f1226e8", "f9f47212-02ee-4a95-91a5-cabe979a83e0", "c00a197e-1083-4064-aeb4-765654c5c9f6", "b926190b-41f4-42cf-9eb2-7c45fc910fa7"]
}, {
	"inCompletedTodos": 2,
	"starredTodos": [],
	"tabId": 1,
	"tabName": "Starred",
	"todos": []
}, {
	"inCompletedTodos": 2,
	"showCompletedTodo": true,
	"starredTodos": [],
	"tabId": "18f4a48f-10c5-4208-9553-4874b52d8cfa",
	"tabName": "2",
	"todos": ["dec345bb-006c-4272-8d6a-83ca97b70bab", "44776031-494c-4c7e-a27c-82ad435269d6", "e1faa9e7-fd89-4b4f-a947-4e8e2afb318e", "e0d7d769-07fd-4aee-9e23-284ab3d44712"]
}, {
	"inCompletedTodos": 2,
	"showCompletedTodo": true,
	"starredTodos": ["ff4f941f-87a4-4682-87c7-4f1432b21328", "1c2d9f5f-edeb-4160-9ed5-7caaf908119e"],
	"tabId": "7e953655-42a7-4334-9b14-37625a96564f",
	"tabName": "1",
	"todos": ["73bbd607-9d88-4358-991e-6015a5293b64", "ff4f941f-87a4-4682-87c7-4f1432b21328", "1c2d9f5f-edeb-4160-9ed5-7caaf908119e"]
}];

export const INBOX_TAB_INFO = {
	"inCompletedTodos": 5,
	"showCompletedTodo": true,
	"starredTodos": ["33b67f02-d96b-46cf-8732-d7c02e11ca1a", "1ef87764-153d-45e0-825a-a8a846d9c93a", "13a10153-3315-4c39-8dc8-86591f1226e8", "c00a197e-1083-4064-aeb4-765654c5c9f6"],
	"tabId": 0,
	"tabName": "Inbox",
	"todos": ["7d66259e-7a2b-4a35-8492-9fe4735e3b1a", "a0165d2f-4707-4ea6-aa35-f1fbd07d34fd", "33b67f02-d96b-46cf-8732-d7c02e11ca1a", "e8a6cc08-1402-4272-be1c-c5ecef01b8ad", "1ef87764-153d-45e0-825a-a8a846d9c93a", "cab5c8ba-6b79-48e8-a124-417862125fce", "13a10153-3315-4c39-8dc8-86591f1226e8", "f9f47212-02ee-4a95-91a5-cabe979a83e0", "c00a197e-1083-4064-aeb4-765654c5c9f6", "b926190b-41f4-42cf-9eb2-7c45fc910fa7"]
};
