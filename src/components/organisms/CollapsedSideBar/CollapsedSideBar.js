import React from 'react';
import styles from './CollapsedSideBar.mod.scss';
import Icon from "../../atoms/Icons/Icon";
import {INBOX, LIST_TOGGLE, PLUS, THREE_DOTS} from "../../atoms/Icons/constants";


class CollapsedSideBar extends React.Component {

	render() {
		const {className, collapseSideBar, ...props} = this.props;
		return (
			<div
				className={`${styles.collapsedSidebar} ${className ? className : ''} fixed d-flex flex-column align-items-center justify-content-start`}
				{...props}>
				<div className={`${styles.listToggle} full-width d-flex align-items-center justify-content-center`}>
					<Icon iconType={LIST_TOGGLE} onClick={collapseSideBar} />
				</div>

				<div className={`${styles.tabList} full-width d-flex flex-column align-items-center justify-content-start`}>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Icon className={styles.icon} iconType={INBOX} onClick={collapseSideBar}/>
					</div>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Icon className={styles.icon} iconType={THREE_DOTS} onClick={collapseSideBar}/>
					</div>
				</div>

				<div className={`${styles.createList} full-width d-flex align-items-center justify-content-center`}>
					<Icon className={styles.icon} iconType={PLUS} onClick={collapseSideBar}/>
				</div>
			</div>
		);
	}
}

export default CollapsedSideBar;
