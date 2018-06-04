import React from 'react';
import './Header.css';
import DropDownIcon from "../../molecules/DropDownIcon/DropDownIcon";
import {SORT} from "../../atoms/logos/constants";
import DropDown from "../DropDown/DropDown";

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			pushDown: false
		}
	}

	dropDownHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.setState((state) => {
			!state.pushDown ?
				window.addEventListener('click', this.dropDownHandler) :
				window.removeEventListener('click', this.dropDownHandler);
			return {
				pushDown: !state.pushDown
			}
		});
	};

	render() {
		const {
			collapsed,
			className,
			headerContent,
			onDropDownButtonClick,
			onDropDownTabClick,
			...props
		} = this.props;
		return (
			<div>
				<div className={`${className ? className : ''} ${collapsed ? 'collapsed' : ''} div__header fixed full-width d-flex align-items-center justify-content-between`}
						 {...props}>
					<div className={"header-content pl-4"}>
						{headerContent}
					</div>
					<div className={"dropdown-icons d-flex align-items-center justify-content-between"}
							 onClick={onDropDownButtonClick}
					>
						<DropDownIcon
							onClick={this.dropDownHandler}
							iconSymbol={SORT}
							iconText={"Sort"}
						/>
					</div>
				</div>
				{
					this.state.pushDown &&
					(
						<DropDown
							onTabClick={onDropDownTabClick}
							style={{
								width: 246,
								position: 'fixed',
								right: 0,
								top: 44,
								backgroundColor: '#678865'
							}}
						/>
					)
				}

			</div>

		);
	}
}

export default Header;