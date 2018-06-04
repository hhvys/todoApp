import {connect} from 'react-redux';
import TabContainerView from '../components/organisms/TabContainerView/TabContainerView';
import {changeActiveTab, searchQuery, toggleEdit, toggleModal} from "../actions/actionCreaters";

const mapStateToProps = (state) => {
	return {
		tabs: state.tabs,
		activeTab: state.activeTab,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (tabId) => {
			dispatch(changeActiveTab(tabId));
			dispatch(searchQuery(''));
		},
		onFooterSymbolClick: (tabId) => {
			dispatch(toggleModal());
			dispatch(toggleEdit());
		}
	}
};

const VerticalTabContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TabContainerView);

export default VerticalTabContainer;