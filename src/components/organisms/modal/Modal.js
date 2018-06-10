import ModalView from './ModalView';
import {connect} from 'react-redux';
import {getTabs} from "../../../reducers/tabs/tabs";
import {getModalActive} from "../../../reducers/modalActive";

const mapStateToProps = (state) => {
	const modalActive = getModalActive(state);
	const tabId = modalActive.tabId;
	const tabs = getTabs(state);
	const editTab = tabs
		.find(tab => tab.tabId === tabId);

	return {
		active: modalActive.isOpened,
		tabId: editTab && tabId,
		tabName: editTab && editTab.tabName
	};
};

const Modal = connect(
	mapStateToProps
)(ModalView);

export default Modal;