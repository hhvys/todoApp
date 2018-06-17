import React from 'react';
import styles from './Input.mod.scss';

const handleChange = (e, onInputChange) => {
	onInputChange(e.target.value);
};

const Input = ({className, onInputChange, inputValue, ...props}) => {
	return (<input
		className={`${className ? className : ''} ${styles.input} full-height d-flex align-items-center justify-content-center`}
		onChange={(e) => handleChange(e, onInputChange)} {...props}
		value={inputValue}
	/>);
};

export default Input;
