import React from 'react';
import './SearchBar.css';
import Symbol from '../../atoms/logos/Symbol';
import Input from '../../atoms/Input/Input';
import {LIST_TOGGLE, SEARCH_SYMBOL} from "../../atoms/logos/constants";

const SearchBar = ({
										 onInputChange,
										 collapseSideBar,
										 ...props
									 }) => (
	<div className={`search__div full-height full-width d-flex justify-content-center align-items-center`}
			 {...props}>
		<div className={"collapse__symbol d-flex align-items-center justify-content-center pl-2"} onClick={collapseSideBar}>
			<Symbol symbolType={LIST_TOGGLE}/>
		</div>
		<Input className={"pl-3"}
					 placeholder={'Search'}
					 onInputChange={onInputChange}
		/>

		<div className={"d-flex align-items-center justify-content-center pr-2"}>
			<Symbol symbolType={SEARCH_SYMBOL}
							style={{
								fill: 'white'
							}}/>
		</div>
	</div>
);

export default SearchBar;
