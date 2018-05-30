import TabListView from './TabListView';
import {connect} from 'react-redux';
import {
			changeActiveTab, 
			toggleSideBar, 
			toggleEdit,
			toggleModal,
			searchQuery
		} from '../../../../actions/actionCreaters';

const mapStateToProps = (state) => {
	return {
		activeTab: state.activeTab,
		tabs: state.tabs,
		collapsedSideBar: state.collapsedSideBar
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTabClick: (tabId, collapsedSideBar) => {
			dispatch(searchQuery(''));
			dispatch(changeActiveTab(tabId));
			if(collapsedSideBar)
				dispatch(toggleSideBar());
		},
		onEditClick: () => {
			dispatch(toggleEdit());
			dispatch(toggleModal());
		}
	};
};

const TabList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TabListView);

export default TabList;