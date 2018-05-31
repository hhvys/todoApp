import React from 'react';
import './Button.css';

const Button = ({text, className, ...props}) => (
	<div className={`div__button ${className ? className : ''}`} {...props}>
		{text}
	</div>
);

export default Button;