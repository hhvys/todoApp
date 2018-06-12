import {connect} from 'react-redux';
import ListContainerView from '../components/organisms/ListContainerView/ListContainerView';
import {changeActiveTab, searchQuery, toggleModal} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getActiveTab} from "../reducers/activeTab";
import {STARRED_ID} from "../actions/actionTypes";

const mapStateToProps = (state) => {
	let tabs = getTabs(state);
	tabs = tabs.map(tab => {
		let footerContent = tab.todos
			.filter(todo => !todo.completed)
			.length;

		if (tab.tabId === STARRED_ID) {
			footerContent = tabs.reduce((totalStarred, tab) => {
				const tabStarred = tab
					.starredTodos
					.reduce((count, todo) => count + !todo.completed, 0);
				return totalStarred + tabStarred;
			}, 0);
		}
		return {
			...tab,
			footerContent
		}
	});
	return {
		tabs,
		activeTab: getActiveTab(state),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (tabId) => {
			dispatch(changeActiveTab(tabId));
			dispatch(searchQuery(''));
		},
		onFooterSymbolClick: (tabId) => {
			dispatch(toggleModal(tabId));
		}
	}
};

const ListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainerView);

export default ListContainer;
