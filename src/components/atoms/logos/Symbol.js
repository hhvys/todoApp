import React from 'react';
import * as svgPaths from './svgPaths';
import * as defaultStyles from './defaultSymbolStyles';

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
		const {
			symbolType,
			height,
			width,
			...restProps
		} = this.props;
		console.log({...restProps});
		return (
			<svg className={"d-flex justify-content-center"}
					 style={this.getDefaultStyles(symbolType)} viewBox={`0 0 ${width} ${height}`} height={height} width={width} {...restProps}>
				{this.getSymbol(symbolType)}
			</svg>

		);
	}
}

export default Symbol;