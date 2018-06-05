import {connect} from 'react-redux';
import HeaderView from '../components/organisms/Header/Header';
import {changeSorting} from "../actions/actionCreaters";
import {getTabs} from "../reducers/tabs/tabs";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";


const mapStateToProps = (state) => {
	const tabs = getTabs(state);
	const searchQuery = getSearchQuery(state);
	const activeTab = getActiveTab(state);
	return ({
		headerContent: searchQuery ?
			searchQuery :
			tabs
				.find(tab => tab.tabId === activeTab)
				.tabName,
		collapsed: getCollapsedSideBar(state)
	})
};

const mapDispatchToProps = (dispatch) => {

	return ({
		onDropDownTabClick: (sortBy) => dispatch(changeSorting(sortBy)),
	})
};


const Header = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderView);

export default Header;
