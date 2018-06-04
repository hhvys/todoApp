import React from 'react';
import './CollapsedSideBar.css';
import Symbol from "../../atoms/logos/Symbol";
import {INBOX, LIST_TOGGLE, PLUS, THREE_DOTS} from "../../atoms/logos/constants";


class CollapsedSideBar extends React.Component {

	render() {
		const {className, collapseSideBar, ...props} = this.props;
		return (
			<div
				className={`div__collapsed__sidebar ${className ? className : ''} fixed d-flex flex-column align-items-center justify-content-start`}
				{...props}>
				<div className={"list-toggle full-width d-flex align-items-center justify-content-center"}>
					<Symbol symbolType={LIST_TOGGLE} onClick={collapseSideBar} />
				</div>

				<div className={"tab-list full-width d-flex flex-column align-items-center justify-content-start"}>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol symbolType={INBOX} onClick={collapseSideBar} style={{fill: '#328ad6'}}/>
					</div>
					<div className={"full-width d-flex align-items-center justify-content-center"}>
						<Symbol symbolType={THREE_DOTS} onClick={collapseSideBar} style={{fill: '#328ad6'}}/>
					</div>
				</div>

				<div className={"create-list full-width d-flex align-items-center justify-content-center"}>
					<Symbol symbolType={PLUS} style={{fill: '#328ad6'}} onClick={collapseSideBar}/>
				</div>
			</div>
		);
	}
}

export default CollapsedSideBar;