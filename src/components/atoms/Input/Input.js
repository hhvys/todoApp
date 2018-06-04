import React from 'react';
import './Input.css';

const handleChange = (e, onInputChange) => {
	onInputChange(e.target.value);
};

const Input = ({className, onInputChange, ...props}) => {
	return (<input
		className={`${className ? className : ''} add-todo full-height d-flex align-items-center justify-content-center`}
		onChange={(e) => handleChange(e, onInputChange)} {...props}/>);
};

export default Input;