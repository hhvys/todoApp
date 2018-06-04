import React from 'react';
import './VerticalTab.css';
import Symbol from "../../atoms/logos/Symbol";

function renderFooter(footerSymbol, onFooterSymbolClick, footerProps) {
	return footerSymbol ? (
		<div className={"footer-symbol full-height d-flex align-items-center justify-content-center"}>
			<Symbol className={"end-symbol"} onClick={onFooterSymbolClick} symbolType={footerSymbol}
							style={{fill: '#262626'}} {...footerProps}/>
		</div>
	) : null;
}

const VerticalTab = ({
											 className,
											 onClick,
											 onFooterSymbolClick,
											 onHeaderSymbolClick,
											 headerSymbol,
											 footerSymbol,
											 footerContent,
											 mainContent,
											 headerProps,
											 footerProps,
											 active,
											 hover,
											 ...props
										 }) => (
	<div
		className={`${className ? className : ''} div__vertical__tab full-width d-flex align-items-center justify-content-center ${active ? 'active' : ''}`}
		onClick={onClick} {...props}>

		<div className={"header full-height d-flex align-items-center justify-content-center"}>
			<Symbol className={"start-symbol"} onClick={onHeaderSymbolClick} symbolType={headerSymbol} {...headerProps}/>
		</div>

		<div className={"d-flex align-items-center main-content full-height txt-overflow ml-2"}>
			{mainContent}
		</div>

		<div className={"footer full-height d-flex align-items-center justify-content-between"}>
			<div className={"footer-content full-height d-flex align-items-center justify-content-end"}>
				{footerContent}
			</div>
			{renderFooter(footerSymbol, onFooterSymbolClick, footerProps)}
		</div>

	</div>
);

export default VerticalTab;