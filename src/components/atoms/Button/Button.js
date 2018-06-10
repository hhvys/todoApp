import React from 'react';
import styles from './Button.mod.scss';

const Button = ({text, className, ...props}) => (
	<div className={`${styles.button} ${className ? className : ''}`} {...props}>
		{text}
	</div>
);

export default Button;
