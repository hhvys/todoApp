import React from 'react';
import styles from './DropDownIcon.mod.scss';
import Icon from "../../atoms/Icons/Icon";

class DropDownIcon extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const {
			iconType,
			onClick,
			iconText,
			...props
		} = this.props;
		return (
			<div className={`${styles.iconDiv} full-height d-flex align-items-center justify-content-center flex-column`}
					 onClick={onClick} {...props}>

				<div className={`full-height d-flex align-items-center justify-content-center`}>
					<Icon
						className={styles.icon}
						iconType={iconType}
					/>
				</div>

				<div className={`${styles.iconText} icon-text full-height d-flex align-items-center justify-content-center`}>
					{iconText}
				</div>

			</div>
		);
	}

}

export default DropDownIcon;
