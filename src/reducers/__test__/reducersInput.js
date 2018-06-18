import {INBOX_ID, SORT_BY, STARRED_ID} from "../../actions/actionTypes";

const state = {
	activeTab: INBOX_ID,
	collapsedSideBar: false,
	modalActive: {
		isOpened: false
	},
	tabs: {
		todoInfo: {
			'a383d653-0fc9-4873-bf88-e4ee57885632': {
				tabId: 0,
				todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632',
				text: '1',
				createdTime: '2018-06-18T04:52:28.353Z'
			},
			'6d0db783-1bcb-40ab-ab48-12a0ae8aa773': {
				tabId: 0,
				todoId: '6d0db783-1bcb-40ab-ab48-12a0ae8aa773',
				text: '2',
				createdTime: '2018-06-18T04:52:28.679Z',
				star: true
			},
			'35ec9698-c2c9-4469-8f09-3e84bc2ee4eb': {
				tabId: 0,
				todoId: '35ec9698-c2c9-4469-8f09-3e84bc2ee4eb',
				text: '3',
				createdTime: '2018-06-18T04:52:29.280Z'
			},
			'868435d7-7f7f-4aae-af31-f91978cad82a': {
				tabId: 0,
				todoId: '868435d7-7f7f-4aae-af31-f91978cad82a',
				text: '6',
				createdTime: '2018-06-18T04:52:31.871Z',
				completed: false,
				completedTime: '2018-06-18T05:09:54.502Z'
			},
			'5ccdce50-5266-4872-aa7f-c8e5e7d4e74c': {
				tabId: 0,
				todoId: '5ccdce50-5266-4872-aa7f-c8e5e7d4e74c',
				text: '5',
				createdTime: '2018-06-18T04:52:32.255Z',
				star: true
			},
			'b8d7fa8d-4898-4817-aa7c-0b1cb4566a44': {
				tabId: 0,
				todoId: 'b8d7fa8d-4898-4817-aa7c-0b1cb4566a44',
				text: '4',
				createdTime: '2018-06-18T04:52:33.144Z'
			},
			'9c60c2e7-291c-4e30-9dfe-9cfbb2295476': {
				tabId: '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1',
				todoId: '9c60c2e7-291c-4e30-9dfe-9cfbb2295476',
				text: 'tab 1 1',
				createdTime: '2018-06-18T04:53:28.709Z'
			},
			'a88ff79a-b113-407e-9298-bfb4811b44c5': {
				tabId: '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1',
				todoId: 'a88ff79a-b113-407e-9298-bfb4811b44c5',
				text: 'tab 1 6',
				createdTime: '2018-06-18T04:53:33.101Z',
				star: true
			},
			'85b1e538-724c-4c72-ad8c-ae51bf4db5af': {
				tabId: 'e26ee1de-944d-4b3a-88cc-1464fe53f32b',
				todoId: '85b1e538-724c-4c72-ad8c-ae51bf4db5af',
				text: 'tab 2 1',
				createdTime: '2018-06-18T04:53:43.581Z',
				star: true
			},
			'538911cd-74b0-4a86-ab06-d827ba98228e': {
				tabId: 'e26ee1de-944d-4b3a-88cc-1464fe53f32b',
				todoId: '538911cd-74b0-4a86-ab06-d827ba98228e',
				text: 'tab 2 2',
				createdTime: '2018-06-18T04:53:47.757Z',
				completed: true,
				completedTime: '2018-06-18T04:53:57.656Z'
			},
			'0c089605-8729-4655-811d-893223dd4091': {
				tabId: 'e26ee1de-944d-4b3a-88cc-1464fe53f32b',
				todoId: '0c089605-8729-4655-811d-893223dd4091',
				text: 'tab 2 6',
				createdTime: '2018-06-18T04:53:50.670Z',
				completed: true,
				completedTime: '2018-06-18T04:53:55.539Z',
				star: true
			},
			'899cda93-66bd-483c-a7aa-3852b900013f': {
				tabId: 'e26ee1de-944d-4b3a-88cc-1464fe53f32b',
				todoId: '899cda93-66bd-483c-a7aa-3852b900013f',
				text: 'tab 2 3',
				createdTime: '2018-06-18T04:53:53.053Z'
			}
		},
		tabInfo: [
			{
				tabId: 0,
				tabName: 'Inbox',
				todos: [
					'b8d7fa8d-4898-4817-aa7c-0b1cb4566a44',
					'5ccdce50-5266-4872-aa7f-c8e5e7d4e74c',
					'868435d7-7f7f-4aae-af31-f91978cad82a',
					'35ec9698-c2c9-4469-8f09-3e84bc2ee4eb',
					'6d0db783-1bcb-40ab-ab48-12a0ae8aa773',
					'a383d653-0fc9-4873-bf88-e4ee57885632'
				],
				starredTodos: [
					'5ccdce50-5266-4872-aa7f-c8e5e7d4e74c',
					'6d0db783-1bcb-40ab-ab48-12a0ae8aa773'
				],
				showCompletedTodo: true
			},
			{
				tabId: 1,
				tabName: 'Starred',
				todos: [],
				starredTodos: []
			},
			{
				tabId: '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1',
				tabName: '1st tab',
				todos: [
					'a88ff79a-b113-407e-9298-bfb4811b44c5',
					'9c60c2e7-291c-4e30-9dfe-9cfbb2295476'
				],
				starredTodos: [
					'a88ff79a-b113-407e-9298-bfb4811b44c5'
				]
			},
			{
				tabId: 'e26ee1de-944d-4b3a-88cc-1464fe53f32b',
				tabName: '2nd tab',
				todos: [
					'899cda93-66bd-483c-a7aa-3852b900013f',
					'0c089605-8729-4655-811d-893223dd4091',
					'538911cd-74b0-4a86-ab06-d827ba98228e',
					'85b1e538-724c-4c72-ad8c-ae51bf4db5af'
				],
				starredTodos: [
					'0c089605-8729-4655-811d-893223dd4091',
					'85b1e538-724c-4c72-ad8c-ae51bf4db5af'
				],
				showCompletedTodo: true
			}
		]
	},
	sortBy: SORT_BY.SORT_CREATION,
	searchQuery: ''
};

export default state;
