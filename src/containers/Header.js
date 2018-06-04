import {connect} from 'react-redux';
import HeaderView from '../components/organisms/Header/Header';
import {changeSorting} from "../actions/actionCreaters";


const mapStateToProps = (state) => {
	return ({
		headerContent: state.searchQuery ?
			state.searchQuery :
			state
				.tabs
				.find(tab => tab.tabId === state.activeTab)
				.tabName,
		collapsed: state.collapsedSideBar
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