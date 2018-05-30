import React from 'react';
import PropTypes from 'prop-types';
import ListSymbol from '../../../logos/ListSymbol';
import Pencil from '../../../logos/Pencil';
import Inbox from '../../../logos/Inbox';
import Star from "../../../logos/Star";
import '../../../logos/logos.css';

const renderSymbol = (tabId) => {
	switch(tabId) {
		case 0:
			return <Inbox/>
		case 1:
			return <Star style={{fill: '#db4c3f'}}/>
		default:
			return <ListSymbol/>
	}
	// tabId === 0 ?
	// 	<Inbox/> :
	// 	<ListSymbol/>
};

const Tab = ({tabId, activeTab, active, totalTodos, tabName, onTabClick, onEditClick}) => (
	
	<li className={active ? 'active' : ''} 
		onClick={onTabClick}
	>
		<div className="tab-name">
		{renderSymbol(tabId)}
		{tabName}</div>
		<div className="edit-tab">
			{(totalTodos > 0) && totalTodos}
			<Pencil 
				tabId={activeTab}
				onEditClick={onEditClick}
			/>
		</div>
	</li>
);

Tab.propTypes = {
	active: PropTypes.bool.isRequired,
	totalTodos: PropTypes.number.isRequired,
	tabName: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired,
	onEditClick: PropTypes.func.isRequired
};

export default Tab;