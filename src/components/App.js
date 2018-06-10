import React from 'react';
import SideBar from '../containers/SideBar';
import Header from "../containers/Header";
import TodoContainer from '../containers/TodoContainer';
import Modal from './organisms/modal';
import MultiTab from '../containers/MultiTab';

const App = ({multiView}) => {
	return (
		<div className="full-size">
			<SideBar className={"full-height fixed"}/>
			<Header style={{backgroundColor: '#678865'}}/>
			{
				multiView ?
					<MultiTab/> :
					<TodoContainer/>
			}
			<Modal/>
		</div>
	);
};

export default App;
