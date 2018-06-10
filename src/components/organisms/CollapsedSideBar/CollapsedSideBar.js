import React from 'react';
import styles from './CollapsedSideBar.mod.scss';
import Symbol from "../../atoms/logos/Symbol";
import {INBOX, LIST_TOGGLE, PLUS, THREE_DOTS} from "../../atoms/logos/constants";


class CollapsedSideBar extends React.Component {

	render() {
		const {className, collapseSideBar, ...props} = this.props;
		return (
			<div
				className={`${styles.collapsedSidebar} ${className ? className : ''} fixed d-flex flex-column align-items-center justify-content-start`}
				{...props}>
				<div className={`${styles.listToggle} full-width d-flex align-items-center justify-content-center`}>
					<Symbol symbolType={LIST_TOGGLE} onClick={collapseSideBar} />
				</div>

				<div className={`${styles.tabList} full-width d-flex flex-column align-items-center justify-content-start`}>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol className={styles.logo} symbolType={INBOX} onClick={collapseSideBar}/>
					</div>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol className={styles.logo} symbolType={THREE_DOTS} onClick={collapseSideBar}/>
					</div>
				</div>

				<div className={`${styles.createList} full-width d-flex align-items-center justify-content-center`}>
					<Symbol className={styles.logo} symbolType={PLUS} onClick={collapseSideBar}/>
				</div>
			</div>
		);
	}
}

export default CollapsedSideBar;
