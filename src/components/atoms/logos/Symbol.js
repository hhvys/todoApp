import React from 'react';
import * as svgPaths from './svgPaths';
import * as defaultStyles from './defaultSymbolStyles';
import {STARRED} from "./constants";

class Symbol extends React.Component {

	static defaultProps = {
		height: 20,
		width: 20,
	};

	constructor(props) {
		super(props);
	}

	getSymbol = (symbolType) => {
		return svgPaths[symbolType];
	};

	getDefaultStyles = (symbolType) => {
		return defaultStyles[symbolType];
	};

	render() {
		let {
			style,
			symbolType,
			height,
			width,
			...restProps
		} = this.props;
		if (symbolType === STARRED)
			[height, width] = [44, 22];
		return (
			<svg className={"d-flex justify-content-center"}
					 style={{...this.getDefaultStyles(symbolType), ...style}} viewBox={`0 0 ${width} ${height}`} height={height}
					 width={width} {...restProps}>
				{this.getSymbol(symbolType)}
			</svg>

		);
	}
}

export default Symbol;