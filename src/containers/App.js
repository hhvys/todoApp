import {connect} from 'react-redux';
import AppView from '../components/App';
import {STARRED_ID} from "../actions/actionTypes";
import {getCollapsedSideBar} from "../reducers/collapsedSideBar";
import {getSearchQuery} from "../reducers/searchQuery";
import {getActiveTab} from "../reducers/activeTab";

const mapStateToProps = (state) => ({
	collapsed: getCollapsedSideBar(state),
	multiView: getSearchQuery(state).length !== 0 || getActiveTab(state) === STARRED_ID
});

const mapDispatchToProps = () => ({
});

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppView);

export default App;
