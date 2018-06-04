import {connect} from 'react-redux';
import AppView from '../components/App';
import {STARRED_ID} from "../actions/actionTypes";

const mapStateToProps = (state) => ({
	collapsed: state.collapsedSideBar,
	multiView: state.searchQuery.length !== 0 || state.activeTab === STARRED_ID
});

const mapDispatchToProps = () => ({
});

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppView);

export default App;