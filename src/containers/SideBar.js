import {connect} from 'react-redux';
import SideBarView from '../components/organisms/SideBar/SideBarView';
import {searchQuery, toggleModal, toggleSideBar} from "../actions/actionCreaters";
import {changeActiveTab} from "../actions/actionCreaters";

const mapStateToProps = (state) => {

	return {
		activeTab: state.activeTab,
		tabs: state.tabs,
		collapsed: state.collapsedSideBar
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

