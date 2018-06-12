import {
	toggleModal,
	addTab,
	changeTabName,
	changeActiveTab,
	deleteTab,
	copyTab, searchQuery
} from '../../../../actions/actionCreaters';
import {connect} from 'react-redux';
import AddForm from './AddForm';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	return {
		onCancel: () => {
			dispatch(toggleModal());
		},
		onSave: (tabId, tabName) => {
			if (tabId)
				dispatch(changeTabName(tabId, tabName));
			else {
				const addTabAction = addTab(tabName);
				dispatch(addTabAction);
				dispatch(changeActiveTab(addTabAction.tabId));
			}
		},
		onDelete: (tabId) => {
			dispatch(changeActiveTab(0));
			dispatch(searchQuery(''));
			dispatch(deleteTab(tabId));
		},
		onDuplicate: (tabId) => {
			dispatch(copyTab(tabId));
		}
	};
};

const AddListForm = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddForm);

export default AddListForm;
