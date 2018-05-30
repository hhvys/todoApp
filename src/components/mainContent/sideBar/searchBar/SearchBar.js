import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleSideBar, searchQuery} from '../../../../actions/actionCreaters';
import SearchSymbol from '../../../logos/SearchSymbol';
import '../../../logos/logos.css';
import './searchBar.css';

const onQueryChange = (e, onInputChange) => {
	const query = e.target.value.trim();
	onInputChange(query);
};

let SearchBar = ({className, collapseSideBar, onInputChange}) => (
	<div className={className}>
		<a href="#" onClick={collapseSideBar}>
			<div></div>
			<div></div>
			<div></div>
		</a>
		<div className="search-input d-flex align-items-center pl-2">
			<input type="text" placeholder="Search" onChange={(e) => onQueryChange(e, onInputChange)}/>
		</div>
		<div className='search-symbol d-flex align-items-center justify-content-center'>
			<SearchSymbol />
		</div>
	</div>
)

SearchBar.propTypes = {
	className: PropTypes.string,
	collapseSideBar: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	collapseSideBar: () => dispatch(toggleSideBar()),
	onInputChange: (query) => {
		dispatch(searchQuery(query))
	}
});

SearchBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);

export default SearchBar;