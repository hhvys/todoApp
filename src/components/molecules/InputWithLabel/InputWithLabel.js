import React from 'react';
import './InputWithLabel.css';
import Input from "../../atoms/Input/Input";

const InputWithLabel = ({label, placeholder, onInputChange, ...props}) => (
	<div {...props}
			 className={`div__input__label full-width d-flex align-items-center justify-content-center`}>
		<label className={`add-symbol full-height d-flex align-items-center justify-content-center`}>{label}</label>
		<Input onInputChange={onInputChange} placeholder={placeholder}/>
		{/*<input className={`add-todo full-height d-flex align-items-center justify-content-center`} placeholder={placeholder}*/}
					 {/*onChange={onInputChange}/>*/}
	</div>
);

export default InputWithLabel;