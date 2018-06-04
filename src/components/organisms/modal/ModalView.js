import React from 'react';
import AddListForm from './addListForm/index';

const ModalView = ({active, editEnabled, activeTab}) => (
	<div className={(active || editEnabled) ? "modal active" : "modal"}>
		<div className="modal-content">
			<h3>
				{
					editEnabled ?
						'Edit List' :
						'Create New List'
				}
			</h3>
			<AddListForm/>
		</div>
	</div>
);

export default ModalView;