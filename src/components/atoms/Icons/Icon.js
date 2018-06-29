import React from 'react';
import * as svgPaths from './svgPaths';
import * as defaultStyles from './defaultIconStyles';
import {STARRED} from "./constants";
import './Icons.css';

class Icon extends React.Component {

	static defaultProps = {
		height: 20,
		width: 20,
	};

	constructor(props) {
		super(props);
	}

	getIcon = (iconType) => {
		return svgPaths[iconType];
	};

	getDefaultStyles = (iconType) => {
		return defaultStyles[iconType];
	};

	render() {
		let {
			className,
			style,
			iconType,
			height,
			width,
			...restProps
		} = this.props;
		if (iconType === STARRED)
			[height, width] = [44, 22];
		return (
			<svg className={`${className ? className : ''} d-flex justify-content-center`}
					 style={{...this.getDefaultStyles(iconType), ...style}} viewBox={`0 0 ${width} ${height}`} height={height}
					 width={width} {...restProps}>
				{this.getIcon(iconType)}
			</svg>

		);
	}
}

export default Icon;
