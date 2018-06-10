import React from 'react';
import styles from './DropDownIcon.scss';
import Symbol from "../../atoms/logos/Symbol";

class DropDownIcon extends React.Component {
	static defaultProps = {
		style: {
			height: 44,
			width: 52
		}
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			iconSymbol,
			onClick,
			iconText,
			...props
		} = this.props;
		return (
			<div className={`${styles.icon} full-height d-flex align-items-center justify-content-center flex-column`}
					 onClick={onClick} {...props}>

				<div className={`full-height d-flex align-items-center justify-content-center`}>
					<Symbol
						className={styles.logo}
						symbolType={iconSymbol}
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
