import {connect} from 'react-redux';
import TabContainerView from '../components/organisms/TabContainerView/TabContainerView';
import {changeActiveTab, searchQuery, toggleModal} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs";
import {getActiveTab} from "../reducers/activeTab";

const mapStateToProps = (state) => {
	const tabs = getTabs(state);
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

const VerticalTabContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TabContainerView);

export default VerticalTabContainer;
