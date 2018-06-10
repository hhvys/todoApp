import React from 'react';
import styles from './NotFound.scss';

const NotFound = () => (
	<div className={`${styles.notFound} d-flex align-items-center justify-content-center flex-column fixed`}>
		<h3 className={`${styles.h3} mt-3`}>No Search Results</h3>
	</div>
);


export default NotFound;
