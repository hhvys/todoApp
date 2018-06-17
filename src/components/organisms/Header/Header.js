import React from 'react';
import styles from './Header.mod.scss';
import DropDownIcon from "../../molecules/DropDownIcon/DropDownIcon";
import {SORT} from "../../atoms/Icons/constants";
import DropDown from "../DropDown/DropDown";

class Header extends React.Component {

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

	constructor(props) {
		super(props);
		this.state = {
			pushDown: false
		}
	}

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
				<div
					className={`${className ? className : ''} ${collapsed ? styles.collapsed : ''} ${styles.header} fixed full-width d-flex align-items-center justify-content-between`}
					{...props}>
					<div className={`${styles.headerContent} pl-4`}>
						{headerContent}
					</div>
					<div className={`${styles.dropdownIcons} d-flex align-items-center justify-content-between`}
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
							className={styles.dropdown}
						/>
					)
				}

			</div>

		);
	}
}

export default Header;
