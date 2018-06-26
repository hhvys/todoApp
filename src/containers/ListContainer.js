import {connect} from 'react-redux';
import ListContainerView from '../components/organisms/ListContainerView/ListContainerView';
import {changeActiveTab, changeSorting, searchQuery, toggleModal} from "../actions/actionCreaters";
import {getActiveTab} from "../reducers/activeTab";
import {getTabInfo} from "../reducers/tabs/tabInfo";

const getTabsWithFooterContent = (state) => {
	let tabs = getTabInfo(state);
	return tabs.map(tab => {
		return {
			...tab,
			footerContent: tab.inCompletedTodos
		}
	});
};


const mapStateToProps = (state) => {

	return {
		tabs: getTabsWithFooterContent(state),
		activeTab: getActiveTab(state),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (tabId) => {
			dispatch(changeActiveTab(tabId));
			dispatch(searchQuery(''));
			dispatch(changeSorting());
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
