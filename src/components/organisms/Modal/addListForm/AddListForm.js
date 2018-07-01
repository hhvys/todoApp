import {
	toggleModal,
	addTab,
	changeTabName,
	changeActiveTab,
	deleteTab,
	copyTab, searchQuery, changeSorting
} from '../../../../actions/actionCreators';
import {connect} from 'react-redux';
import AddForm from './AddForm';
import {INBOX_ID} from "../../../../actions/actionTypes";

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
				dispatch(changeSorting());
			}
		},
		onDelete: (tabId) => {
			dispatch(changeActiveTab(INBOX_ID));
			dispatch(searchQuery(''));
			dispatch(deleteTab(tabId));
			dispatch(changeSorting());
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
