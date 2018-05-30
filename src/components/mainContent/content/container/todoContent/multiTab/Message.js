import React from 'react';
import SearchSymbol from '../../../../../logos/SearchSymbol';

const Message = ({className, message}) => (
	<div className={className + " d-flex align-items-center justify-content-center flex-column fixed"}>
		<SearchSymbol style={{height: 100, width: 100, fill: 'white'}}/>
		<h3 className="mt-3" style={{color: 'white', opacity: 0.6}}>No Search Results</h3>
	</div>
);

export default Message;