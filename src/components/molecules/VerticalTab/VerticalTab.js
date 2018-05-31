import React from 'react';
import './VerticalTab.css';
import Symbol from "../../atoms/logos/Symbol";

const VerticalTab = ({onClick, onFooterSymbolClick, headerSymbol, footerSymbol, footerContent, mainContent, ...props}) => (
	<div className={`div__vertical__tab full-height d-flex align-items-center justify-content-between`}
			 onClick={onClick} {...props}>

		<div className={"header full-height d-flex align-items-center justify-content-center"}>
			<Symbol className={"start-symbol"} symbolType={headerSymbol}/>
		</div>

		<div className={"main-content full-height txt-overflow"}>
			{mainContent}
		</div>

		<div className={"footer full-height d-flex align-items-center justify-content-between"}>
			<div className={"footer-content full-height d-flex align-items-center justify-content-center"}>
				{footerContent}
			</div>
			<div className={"footer-symbol full-height d-flex align-items-center justify-content-center"}>
				<Symbol className={"end-symbol"} onClick={onFooterSymbolClick} symbolType={footerSymbol}
								style={{fill: '#262626'}}/>
			</div>
		</div>

	</div>
);

export default VerticalTab;