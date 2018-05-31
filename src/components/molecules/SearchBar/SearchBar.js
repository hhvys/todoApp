import React from 'react';
import './SearchBar.css';
import Symbol from '../../atoms/logos/Symbol';
import Input from '../../atoms/Input/Input';

const SearchBar = ({
										 onInputChange,
										 ...props
									 }) => (
	<div className={`search__div full-height full-width d-flex justify-content-center align-items-center`}
			 {...props}>
		<div className={"d-flex align-items-center justify-content-center pl-2"}>
			<Symbol symbolType="listToggle"/>
		</div>

		<Input className={"pl-3"}
					 placeholder={'Search'}/>

		<div className={"d-flex align-items-center justify-content-center pr-2"}>
			<Symbol symbolType={"searchSymbol"}
							style={{
								fill: 'white'
							}}/>
		</div>
	</div>
);

export default SearchBar;
