import {connect} from 'react-redux';
import SideBarView from '../components/organisms/SideBar/SideBarView';
import {searchQuery, toggleModal, toggleSideBar} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";

const mapStateToProps = (state) => {

	return {
		activeTab: getActiveTab(state),
		tabs: getTabs(state),
		collapsed: getCollapsedSideBar(state)
	};

};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (query) => dispatch(searchQuery(query)),
		onCreateClick: () => dispatch(toggleModal()),
		collapseSideBar: () => dispatch(toggleSideBar())
	};
};

const SideBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(SideBarView);

export default SideBar;

