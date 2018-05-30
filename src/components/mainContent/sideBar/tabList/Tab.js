import React from 'react';
import PropTypes from 'prop-types';
import ListSymbol from '../../../logos/ListSymbol';
import Pencil from '../../../logos/Pencil';
import Inbox from '../../../logos/Inbox';
import Star from "../../../logos/Star";
import '../../../logos/logos.css';

const renderSymbol = (tabId) => {
	switch (tabId) {
		case 0:
			return <Inbox/>;
		case 1:
			return <Star style={{fill: '#db4c3f'}}/>;
		default:
			return <ListSymbol/>;
	}
};

const Tab = ({tabId, activeTab, active, totalTodos, tabName, onTabClick, onEditClick}) => {
	if (tabId === 1 && totalTodos === 0)
		return <div></div>;
	return (
		<li className={`d-flex align-items-center justify-content-between full-size ${active ? 'active ' : ''}`}
				onClick={onTabClick}
		>
			<div className="tab-name d-flex align-items-center full-height">
				<div className="full-height">{renderSymbol(tabId)}</div>
				<div className="txt-overflow">{tabName}</div>
			</div>
			<div className="edit-tab full-height align-items-center justify-content-center">
				{(totalTodos > 0) && totalTodos}
				<Pencil
					tabId={activeTab}
					onEditClick={onEditClick}
				/>
			</div>
		</li>
	);
};

Tab.propTypes = {
	active: PropTypes.bool.isRequired,
	totalTodos: PropTypes.number.isRequired,
	tabName: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired
};

export default Tab;