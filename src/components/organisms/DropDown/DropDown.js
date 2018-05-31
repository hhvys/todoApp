import React from 'react';
import './DropDown.css';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";

class DropDown extends React.Component {

	render() {

		return (
			<div>
				<VerticalTab onClick={() => console.log('clicked 1')} headerSymbol={'sort'} mainContent={"Sort Alphabetically"}
										 style={{backgroundColor: '#678865', height: 31, width: 246}}/>
				<VerticalTab onClick={() => console.log('clicked 1')} headerSymbol={'sort'} mainContent={"Sort Alphabetically"}
										 style={{backgroundColor: '#678865', height: 31, width: 246}}/>
				<VerticalTab onClick={() => console.log('clicked 1')} headerSymbol={'sort'} mainContent={"Sort Alphabetically"}
										 style={{backgroundColor: '#678865', height: 31, width: 246}}/>
			</div>
		);
	}
}

export default DropDown;