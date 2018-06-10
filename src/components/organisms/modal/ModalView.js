import React from 'react';
import AddListForm from './addListForm/index';
import styles from './modal.scss';

const ModalView = (props) => (
	<div className={props.active ? `${styles.modal} ${styles.active}` : styles.modal}>
		<div className={styles.modalContent}>
			<h3 className={styles.h3}>
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
