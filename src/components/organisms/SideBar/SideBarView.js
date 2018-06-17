import React from 'react';
import SearchBar from "../../molecules/SearchBar/SearchBar";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import {PLUS, LIST_SYMBOL, PENCIL} from '../../atoms/logos/constants';
import ListContainer from '../../../containers/ListContainer';
import CollapsedSideBar from "../CollapsedSideBar/CollapsedSideBar";
import styles from './SideBar.mod.scss';


class SideBarView extends React.Component {

	render() {
		const {
			className,
			onSearchChange,
			onCreateClick,
			collapseSideBar,
			collapsed,
			searchValue,
			...props
		} = this.props;

		return collapsed ?
			<CollapsedSideBar collapseSideBar={collapseSideBar}/> :
			(
				<div
					className={`${styles.sideBar} ${className ? className : ''} d-flex flex-column align-items-center justify-content-center`}
					{...props}>
					<SearchBar
						className={styles.searchBar}
						onInputChange={onSearchChange}
						collapseSideBar={collapseSideBar}
						inputValue={searchValue}
					/>

					<ListContainer
						className={styles.verticalTabContainer}
						headerSymbol={LIST_SYMBOL}
						footerSymbol={PENCIL}
						/>

					<VerticalTab headerSymbol={PLUS}
											 mainContent={"Create List"}
											 onClick={onCreateClick}
											 headerClass={styles.footerLogo}
											 className={styles.footer}
					/>
				</div>
			);
	}
}

export default SideBarView;
