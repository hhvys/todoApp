import React from 'react';
import './Header.css';
import DropDownIcon from "../../molecules/DropDownIcon/DropDownIcon";

class Header extends React.Component {

	render() {
		const {...props} = this.props;
		return (
			<div className={"div__header fixed full-width d-flex align-items-center justify-content-between"}
					 {...props}>
				<div className={"header-content pl-4"}>
					fafasfasdfadsf
				</div>
				<div className={"dorpdown-icons d-flex align-items-center justify-content-between"}>
					<DropDownIcon iconSymbol={"sort"} iconText={"Sort"}/>
				</div>
			</div>
		);
	}
}

export default Header;