import React from 'react';
import PropTypes from 'prop-types';
import Sort from '../../../logos/Sort';
import DropDown from './DropDown'

class HeaderView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: ''
		};
	}

	handleWindowClick = (eve) => {
		this.handleClick(eve);
	};

	handleClick = (e) => {
		this.setState((state) => {
			!state.className ?
				window.addEventListener('click', this.handleWindowClick) :
				window.removeEventListener('click', this.handleWindowClick);
			return {
				className: state.className ? '' : 'active'
			}
		});
		e.preventDefault();
		e.stopPropagation();
	};

	render() {
		return (
			<div className={this.props.className + " d-flex justify-content-between"}>
				<div className="tab-header">{this.props.query || this.props.tabName}</div>
				<div className="header-tab">
					<div className="sort d-flex flex-column align-items-center justify-content-center" onClick={this.handleClick}>
						<Sort />
						Sort
					</div>
				</div>
				<DropDown changeSort={this.props.changeSort} className={"dropdown-menu-1 fixed " + this.state.className}/>
			</div>
		);
	}
}



HeaderView.propTypes = {
	tabName: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default HeaderView;