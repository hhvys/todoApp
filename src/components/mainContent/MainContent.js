import React from 'react';
import SideBar from './sideBar';
import Content from './content';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
	modalActive: state.modalActive,
	collapsedSideBar: state.collapsedSideBar
});

const getClass = (modalActive, collapsedSideBar) => {
	let className="main-content full-size";
	if(modalActive)
		className= className + " modal-active";
	if(collapsedSideBar)
		className=className + " collapsed";
	return className;
};

let MainContent = ({modalActive, collapsedSideBar}) => {
	return (
		<div className= {getClass(modalActive, collapsedSideBar)}
		>
			<SideBar />
			<Content />
		</div>
	);
};

MainContent = connect(
	mapStateToProps,
)(MainContent);

export default MainContent;