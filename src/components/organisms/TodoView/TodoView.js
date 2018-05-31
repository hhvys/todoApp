import React from 'react';
import './TodoView.css';
import InputWithLabel from "../../molecules/InputWithLabel/InputWithLabel";
import VerticalTab from "../../molecules/VerticalTab/VerticalTab";
import Button from "../../atoms/Button/Button";

// {
// 	onClick,
// 		onFooterSymbolClick,
// 		onHeaderSymbolClick,
// 		headerSymbol,
// 		footerSymbol,
// 		footerContent,
// 		mainContent,
// 		active,
// ...props
// }

class TodoView extends React.Component {


	render() {
		return (
			<div className={"div__todo__view full-height d-flex flex-column justify-content-start mr-3"}>
				<InputWithLabel
					label={"+"}
					placeholder={"Add a to-do..."}
					style={{fontSize: 16}}/>

				<div className={"incompleted-todos mt-3"}>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
												 	marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
				</div>

				<Button className={"mt-3"} text={"SHOW COMPLETED TO-DOS"}/>

				<div className={"completed-todos mt-3"}>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 opacity: 0.6,
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
					<VerticalTab headerSymbol={"checkBox"}
											 footerSymbol={"star"}
											 footerProps={{
												 style: {
													 marginRight: 10
												 }
											 }}
											 mainContent={"random generator"}
											 style={{
												 marginTop: 2,
												 backgroundColor: '#F7F7F7',
												 opacity: 0.6,
												 borderRadius: '5px',
												 height: 46
											 }}
					/>
				</div>


			</div>

		);
	}
}

export default TodoView;
