import React from 'react';
import SideBar from "./organisms/SideBar/SideBar";
import Header from "./organisms/Header/Header";
import TodoView from './organisms/TodoView/TodoView';

// const App = () => (
// 	<div className="full-size">
// 		<Modal />
// 		<MainContent />
// 	</div>
// );

const App = () => (
	<div className="full-size">
		<SideBar className={"full-height fixed"} style={{width: 280}}/>
		<Header style={{backgroundColor: '#678865'}}/>
		<TodoView/>
	</div>
);

export default App;