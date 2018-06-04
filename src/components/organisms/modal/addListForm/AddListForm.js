import {
	toggleModal,
	addTab,
	toggleEdit,
	changeTabName,
	changeActiveTab,
	deleteTab,
	copyTab, searchQuery
} from '../../../../actions/actionCreaters';
import {connect} from 'react-redux';
import AddForm from './AddForm';

const mapStateToProps = (state) => {
	return {
		editEnabled: state.editEnabled,
		activeTab: state.activeTab,
		tabName: state
					.tabs
					.find(tab => tab.tabId === state.activeTab)
					.tabName
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCancel: (editEnabled) => {
			dispatch(toggleModal());
			if(editEnabled)
				dispatch(toggleEdit());
		},
		onSave: (tabId, tabName, editEnabled) => {
			console.log(tabName);

			editEnabled ?
				dispatch(changeTabName(tabId, tabName)) :
				dispatch(addTab(tabName))
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