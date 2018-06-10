import React from 'react';
import styles from './DropDown.mod.scss';
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {SORT, STAR, SORT_CREATION} from "../../atoms/logos/constants";
import {SORT_BY} from "../../../actions/actionTypes";

class DropDown extends React.Component {


	render() {
		const {
			className,
			onClick,
			style,
			onTabClick,
			...props
		} = this.props;
		return (
			<div className={className} onClick={onClick} {...props} style={{...style}}>
				<VerticalTab
					className={styles.tab}
					onClick={() => onTabClick(SORT_BY.SORT_ALPHA)}
					headerSymbol={SORT}
					mainContent={"Sort Alphabetically"}
					headerClass={styles.headerLogo}
				/>
				<VerticalTab
					className={styles.tab}
					onClick={() => onTabClick(SORT_BY.SORT_CREATION)}
					headerSymbol={SORT_CREATION}
					mainContent={"Sort by Creation Date"}
					headerClass={styles.headerLogo}
				/>
				<VerticalTab
					className={styles.tab}
					onClick={() => onTabClick(SORT_BY.SORT_PRIORITY)}
					headerSymbol={STAR}
					mainContent={"Sort by Priority"}
					headerClass={styles.headerLogo}
				/>
			</div>
		);
	}
}

export default DropDown;
