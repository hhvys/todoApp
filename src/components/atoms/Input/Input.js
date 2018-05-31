import React from 'react';
import './Input.css';

const Input = ({className, onInputChange, ...props}) => (
	<input className={`${className ? className : ''} add-todo full-height d-flex align-items-center justify-content-center`}
				 onChange={onInputChange} {...props}/>
);

export default Input;