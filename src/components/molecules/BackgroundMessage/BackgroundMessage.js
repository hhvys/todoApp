import React from 'react';
import styles from './BackgroundMessage.mod.scss';

const BackgroundMessage = ({message}) => (
	<div className={`${styles.notFound} d-flex align-items-center justify-content-center flex-column fixed`}>
		<h3 className={`${styles.h3} mt-3`}>{message}</h3>
	</div>
);


export default BackgroundMessage;
