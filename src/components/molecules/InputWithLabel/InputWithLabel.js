import React from 'react';
import styles from './InputWithLabel.mod.scss';
import Input from "../../atoms/Input/Input";

const handleKeyUp = (e, onSubmit) => {
	if (e.nativeEvent.keyCode === 13) {
		const inputValue = e.nativeEvent.target.value.trim();
		if (inputValue)
			onSubmit(inputValue);
		e.nativeEvent.target.value = '';
	}
};

const InputWithLabel = ({
													className,
													label,
													placeholder,
													onInputChange,
													onSubmit,
													...props
												}) => (
	<div {...props}
			 className={`${className ? className : ''} ${styles.inputLabel} full-width d-flex align-items-center justify-content-center`}>
		<label
			className={`${styles.addSymbol} full-height d-flex align-items-center justify-content-center`}>{label}</label>
		<Input onInputChange={() => {
		}}
					 onKeyUp={(e) => handleKeyUp(e, onSubmit)}
					 placeholder={placeholder}
		/>
	</div>
);

export default InputWithLabel;
