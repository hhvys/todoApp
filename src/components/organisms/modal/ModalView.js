import React from 'react';
import AddListForm from './addListForm/index';

const ModalView = (props) => (
	<div className={props.active ? "modal active" : "modal"}>
		<div className="modal-content">
			<h3>
				{
					props.tabId ?
						'Edit List' :
						'Create New List'
				}
			</h3>
			<AddListForm {...props}/>
		</div>
	</div>
);

export default ModalView;