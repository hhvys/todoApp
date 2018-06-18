import React from 'react';
import styles from './DropDown.mod.scss';
import RowComponent from "../../molecules/RowComponent/RowComponent";
import {SORT, STAR, SORT_CREATION} from "../../atoms/Icons/constants";
import {SORT_BY} from "../../../actions/actionTypes";

class DropDown extends React.Component {


	render() {
		const {
			className,
			onClick,
			onTabClick,
			...props
		} = this.props;
		return (
			<div className={className} onClick={onClick} {...props}>
				<RowComponent
					className={styles.tab}
					onClick={() => onTabClick(SORT_BY.SORT_ALPHA)}
					headerSymbol={SORT}
					mainContent={"Sort Alphabetically"}
					headerClass={styles.headerLogo}
				/>
				<RowComponent
					className={styles.tab}
					onClick={() => onTabClick(SORT_BY.SORT_CREATION)}
					headerSymbol={SORT_CREATION}
					mainContent={"Sort by Creation Date"}
					headerClass={styles.headerLogo}
				/>
				<RowComponent
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
