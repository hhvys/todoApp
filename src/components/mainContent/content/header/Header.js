import {connect} from 'react-redux';
import HeaderView from './HeaderView';
import {changeSorting, toggleDropDown} from "../../../../actions/actionCreaters";

const mapStateToProps = (state) => {

	let activeTab = state
					.tabs
					.find(tab => tab.tabId === state.activeTab);
	return {
		tabName: activeTab.tabName,
		query: state.searchQuery
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeSort: (sortBy) => dispatch(changeSorting(sortBy)),
		onClick: () => dispatch(toggleDropDown())
	};
};

const Header = connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderView);

export default Header;