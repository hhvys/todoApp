import {connect} from 'react-redux';
import CreateListView from './CreateListView';
import {toggleModal} from '../../../../actions/actionCreaters';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	onClickCreate: () => dispatch(toggleModal())
});

const CreateList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateListView);

export default CreateList;