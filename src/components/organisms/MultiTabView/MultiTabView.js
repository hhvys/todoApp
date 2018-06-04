import React from 'react';
import Button from "../../atoms/Button/Button";
import './MultiTabView.css';
import {CHECK_BOX, CHECKED_CHECK_BOX} from "../../atoms/logos/constants";
import VerticalTab from '../../molecules/VerticalTab/VerticalTab';
import {SORT_BY} from "../../../actions/actionTypes"
import {STARRED, STAR} from "../../atoms/logos/constants";
import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';
import NotFound from '../../molecules/NotFound/NotFound';

class MultiTabView extends React.Component {


	renderVerticalTab = ({
												 todos,
												 tabId,
												 onFooterSymbolClick,
												 onHeaderSymbolClick,
												 sortBy,
											 }) => {

		return (
			todos
				.sort((a, b) => {
					switch (sortBy) {
						case SORT_BY.SORT_PRIORITY:
							if (a.star && !b.star)
								return -1;
							if (!a.star && b.star)
								return 1;
							return 0;

						case SORT_BY.SORT_CREATION:
							if (a.completedTime > b.completedTime)
								return -1;
							return 1;

						case SORT_BY.SORT_ALPHA:
							if (a.text < b.text)
								return -1;
							return 1;
					}

				})
				.map(todo => {

					return (
						<VerticalTab key={todo.todoId}
												 headerSymbol={todo.completed ? CHECKED_CHECK_BOX : CHECK_BOX}
												 footerSymbol={todo.star ? STARRED : STAR}
												 footerProps={{
													 style: {
														 marginRight: 10
													 }
												 }}
												 headerProps={{
													 style: {
														 marginLeft: 10
													 }
												 }}
												 mainContent={todo.text}
												 style={{
													 marginTop: 2,
													 backgroundColor: '#F7F7F7',
													 borderRadius: '5px',
													 height: 46
												 }}
												 onFooterSymbolClick={() => onFooterSymbolClick(tabId, todo.todoId)}
												 onHeaderSymbolClick={() => onHeaderSymbolClick(tabId, todo.todoId)}
						/>
					);
				})
		);
	};

	renderStarred({
									tabs,
									onFooterSymbolClick,
									onHeaderSymbolClick,
									sortBy,
									onButtonClick,
									searchQuery
								}) {
		tabs = searchQuery.length !== 0 ?
			tabs
				.map(tab => ({
					...tab,
					todos: tab
						.todos
						.filter(todo => !todo.completed && (new RegExp(searchQuery).test(todo.text)))
				})) :
			tabs
				.map(tab => ({
					...tab,
					todos: tab
						.todos
						.filter(todo => todo.star && !todo.completed)
				}));

		tabs = tabs.filter(tab => tab.todos.length);

		if(tabs.length === 0)
			return (<NotFound/>)

		return tabs.map(tab => (
			<div key={tab.tabId}>
				<Button text={tab.tabName.toLocaleUpperCase()}
								className={"mt-4 mb-2"}
								onClick={() => onButtonClick(tab.tabId)}/>
				{
					this.renderVerticalTab({
						todos: tab.todos,
						tabId: tab.tabId,
						onFooterSymbolClick,
						onHeaderSymbolClick,
						sortBy
					})
				}
			</div>
		))
	}

	render() {
		const {
			tabs,
			sortBy,
			onHeaderSymbolClick,
			onFooterSymbolClick,
			searchQuery,
			activeTab,
			onButtonClick,
			collapsed,
			onInputSubmit
		} = this.props;
		return (
			<div className={`div__multi__tab__view ${collapsed ? 'collapsed' : ''} mr-3`}>
				{
					searchQuery.length === 0 ?
						<InputWithLabel
							label={"+"}
							placeholder={"Add a starred to-do in Inbox..."}
							style={{fontSize: 16}}
							onSubmit={(value) => onInputSubmit(value)}
						/> :
						null
				}
				{this.renderStarred({
					tabs,
					sortBy,
					onHeaderSymbolClick,
					onFooterSymbolClick,
					searchQuery,
					activeTab,
					onButtonClick
				})}
			</div>
		);
	}
}

export default MultiTabView;