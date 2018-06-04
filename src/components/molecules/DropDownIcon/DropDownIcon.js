import React from 'react';
import './DropDownIcon.css';
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
			<div className={"div__dd__icon full-height d-flex align-items-center justify-content-center flex-column"}
					 onClick={onClick} {...props}>

				<div className={"icon-symbol full-height d-flex align-items-center justify-content-center"}>
					<Symbol symbolType={iconSymbol}
									style={{fill: 'white', marginTop: 10}}/>
				</div>

				<div className={"icon-text full-height d-flex align-items-center justify-content-center"}>
					{iconText}
				</div>

			</div>
		);
	}

}

export default DropDownIcon;