import {connect} from 'react-redux';
import HeaderView from '../components/organisms/Header/Header';
import {changeSorting} from "../actions/actionCreators";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";
import {getTabInfo} from "../reducers/tabs/tabInfo";


const mapStateToProps = (state) => {
	const tabs = getTabInfo(state);
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
