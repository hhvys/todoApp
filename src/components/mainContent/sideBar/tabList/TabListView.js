import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './tabList.css';

const tabList = (tabs, activeTab, onTabClick, collapsedSideBar, onEditClick) => {
	return tabs.map(tab => (
		<Tab active={tab.tabId === activeTab}
			totalTodos={
				tab.tabId === 1 ?

					tabs
						.map(tab => ({
							...tab,
							todos: tab.todos.filter(todo => todo.star && !todo.completed)
						}))
						.reduce((tot, tab) => (
							tot + tab.todos.length
						), 0) :

					tab
						.todos
						.filter(todo => !todo.completed)
						.length
			}
			tabName={tab.tabName}
			key={tab.tabId}
			onTabClick={() => onTabClick(tab.tabId, collapsedSideBar)}
			onEditClick={onEditClick}
			tabId={tab.tabId}
			activeTab={activeTab}
		/>
	))
};

const TabList = ({className, activeTab, tabs, onTabClick, collapsedSideBar, onEditClick}) => (	
	<div className={className}>
		<ul>
			{tabList(tabs, activeTab, onTabClick, collapsedSideBar, onEditClick)}
		</ul>
	</div>
);

TabList.propTypes = {
	className: PropTypes.string.isRequired,
	activeTab: PropTypes.number.isRequired,
	onTabClick: PropTypes.func.isRequired,
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			tabId: PropTypes.number.isRequired,
			tabName: PropTypes.string.isRequired,
			todos: PropTypes.arrayOf(
				PropTypes.shape({
					todoId: PropTypes.number.isRequired,
					text: PropTypes.string.isRequired,
					completed: PropTypes.bool.isRequired
				}).isRequired
			)
		}).isRequired
	).isRequired
}

export default TabList;