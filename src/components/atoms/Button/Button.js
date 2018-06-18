import React from 'react';
import styles from './Button.mod.scss';

const Button = ({text, className, onClick}) => (
	<div className={`${styles.button} ${className ? className : ''}`} onClick={onClick}>
		{text}
	</div>
);

export default Button;
