import React from 'react';
import './SideBar.css';
import SearchBar from "../../molecules/SearchBar/SearchBar";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {PLUS, LIST_SYMBOL, PENCIL} from '../../atoms/logos/constants';
import VerticalTabContainer from '../../../containers/VerticalTabContainer';
import CollapsedSideBar from "../CollapsedSideBar/CollapsedSideBar";



class SideBarView extends React.Component {


	render() {
		const {
			className,
			onSearchChange,
			onCreateClick,
			collapseSideBar,
			collapsed,
			...props
		} = this.props;
		return collapsed ?
			<CollapsedSideBar collapseSideBar={collapseSideBar}/> :
			(
				<div
					className={`div__sidebar ${className ? className : ''} d-flex flex-column align-items-center justify-content-center`}
					{...props}>
					<SearchBar
						onInputChange={onSearchChange}
						style={{
							height: 45,
							minHeight: 45,
							backgroundColor: '#5B795A'
						}}
						collapseSideBar={collapseSideBar}
					/>

					<VerticalTabContainer
						headerSymbol={LIST_SYMBOL}
						footerSymbol={PENCIL}
						style={{
							backgroundColor: '#F7F7F7',
							width: 280,
							overflowY: 'auto',
							overflowX: 'hidden',
							flex: 1
						}}/>

					<VerticalTab headerSymbol={PLUS}
											 mainContent={"Create List"}
											 onClick={onCreateClick}
											 headerProps={{
											 	style: {
											 		fill: '#328ad6'
												}
											 }}
											 style={{
												 height: 42,
												 minHeight: 42,
												 backgroundColor: '#F7F7F7',
												 borderTop: '1px solid #e0e0df',
												 color: '#328ad6',
												 fontWeight: 500,
												 fill: '#328ad6'
											 }}/>
				</div>
			);
	}
}

export default SideBarView;