import {connect} from 'react-redux';
import SideBarView from '../components/organisms/SideBar/SideBarView';
import {searchQuery, toggleModal, toggleSideBar} from "../actions/actionCreaters";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";
import {getSearchQuery} from "../reducers/searchQuery";

const mapStateToProps = (state) => {
	return {
		collapsed: getCollapsedSideBar(state),
		searchValue: getSearchQuery(state)
	}
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

