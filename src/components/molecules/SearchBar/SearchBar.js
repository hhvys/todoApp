import React from 'react';
import styles from './SearchBar.mod.scss';
import Icon from '../../atoms/Icons/Icon';
import Input from '../../atoms/Input/Input';
import {LIST_TOGGLE, SEARCH_SYMBOL} from "../../atoms/Icons/constants";

const SearchBar = ({
			className,
			onInputChange,
			collapseSideBar,
			inputValue,
			...props
									 }) => (
			<div
				className={`${styles.search} full-width d-flex justify-content-center align-items-center ${className ? className : ''}`}
				{...props}>
				<div className={`${styles.collapse} d-flex align-items-center justify-content-center pl-2`}
						 onClick={collapseSideBar}>
					<Icon symbolType={LIST_TOGGLE}/>
				</div>
				<Input className={"pl-3"}
							 placeholder={'Search'}
							 onInputChange={onInputChange}
							 inputValue={inputValue}
				/>

		<div className={"d-flex align-items-center justify-content-center pr-2"}>
			<Icon
				className={styles.white}
				symbolType={SEARCH_SYMBOL}
			/>
		</div>
	</div>
);

export default SearchBar;
