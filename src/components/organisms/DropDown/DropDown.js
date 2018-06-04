import React from 'react';
import './DropDown.css';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {SORT, STAR, SORT_CREATION} from "../../atoms/logos/constants";
import {SORT_BY} from "../../../actions/actionTypes";

class DropDown extends React.Component {


	render() {
		const {
			onClick,
			style,
			onTabClick,
			...props
		} = this.props;
		return (
			<div onClick={onClick} {...props} style={{...style}}>
				<VerticalTab onClick={() => onTabClick(SORT_BY.SORT_ALPHA)}
										 headerSymbol={SORT}
										 mainContent={"Sort Alphabetically"}
										 className={"dropdown"}
				/>
				<VerticalTab onClick={() => onTabClick(SORT_BY.SORT_CREATION)}
										 headerSymbol={SORT_CREATION}
										 mainContent={"Sort by Creation Date"}
										 className={"dropdown"}/>
				<VerticalTab onClick={() => onTabClick(SORT_BY.SORT_PRIORITY)}
										 headerSymbol={STAR}
										 mainContent={"Sort by Priority"}
										 className={"dropdown"}/>
			</div>
		);
	}
}

export default DropDown;