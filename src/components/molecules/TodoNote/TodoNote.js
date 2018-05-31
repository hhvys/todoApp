import React from 'react';
import './TodoNote.css';
import Symbol from '../../atoms/logos/Symbol';
import Starred from "../../atoms/logos/Starred";

const TodoNote = ({
										className, noteContent, startSymbol, endSymbol, onStartSymbolClick, onEndSymbolClick, content, onClick,
										...
											props
									}) =>
	(
		<div
			className={`${className ? className : ''} div__note full-height full-width d-flex align-items-center justify-content-between`} {...props}>
			<div className={"start__symbol full-height d-flex align-items-center justify-content-center"}>
				<Symbol symbolType={startSymbol} onClick={onStartSymbolClick}/>
			</div>
			<div className={"note__content full-height txt-overflow"}>
				{noteContent}
			</div>
			<div className={"end__symbol full-height d-flex align-items-center justify-content-center"}>
				<Symbol onClick={onEndSymbolClick} symbolType={"starred"} height={"44px"} width={"22px"}/>
			</div>
		</div>
	);

export default TodoNote;
