import React from 'react';

class CheckBox extends React.Component {
	render() {
		let {onClick, ...props} = this.props;
		return (
			<svg onClick={onClick} className="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"
					 xmlns="http://www.w3.org/2000/svg" style={{
				fillRule: "evenodd",
				clipRule: "evenodd",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeMiterlimit: 1.41421,
				stroke: "rgba(0,0,0,0.35)"
			}}>
				<g>
					<path
						d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z"
						style={{fill: "none", strokeWidth: 1}}>
					</path>
				</g>
			</svg>
		);
	}
}

export default CheckBox;