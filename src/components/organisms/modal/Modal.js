import ModalView from './ModalView';
import {connect} from 'react-redux';
import './modal.css';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		active: state.modalActive,
		editEnabled: state.editEnabled,
		activeTab: state.activeTab
	};
};

const Modal = connect(
	mapStateToProps
)(ModalView);

export default Modal;