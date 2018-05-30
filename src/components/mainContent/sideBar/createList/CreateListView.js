import React from 'react';
import PropTypes from 'prop-types';
import './createList.css';

const CreateListView = ({onClickCreate}) => (
	<div className="create-list" onClick={onClickCreate}>
		+<div>Create List</div>
	</div>
);

CreateListView.propTypes = {
	onClickCreate: PropTypes.func.isRequired
}

export default CreateListView;