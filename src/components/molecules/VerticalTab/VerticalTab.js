import React from 'react';
import styles from './VerticalTab.mod.scss';
import Symbol from "../../atoms/logos/Symbol";

function renderFooter(footerSymbol, onFooterSymbolClick, footerClass) {
	return footerSymbol ? (
		<div className={`full-height d-flex align-items-center justify-content-center`}>
			<Symbol className={`${footerClass ? footerClass : ''} ${styles.endSymbol}`}
							onClick={onFooterSymbolClick}
							symbolType={footerSymbol}
			/>
		</div>
	) : null;
}

const VerticalTab = ({
											 className,
											 headerClass,
											 footerClass,
											 onClick,
											 onFooterSymbolClick,
											 onHeaderSymbolClick,
											 headerSymbol,
											 footerSymbol,
											 footerContent,
											 mainContent,
											 active,
											 hover,
											 extraContent,
											 ...props
										 }) => (
	<div
		className={`${className ? className : ''} ${styles.verticalTab} full-width d-flex align-items-center justify-content-center ${active ? styles.active : ''}`}
		onClick={onClick} {...props}>

		<div className={`${styles.verticalTab} full-height d-flex align-items-center justify-content-center`}>
			<Symbol className={`${headerClass ? headerClass : ''} `} onClick={onHeaderSymbolClick}
							symbolType={headerSymbol}/>
		</div>

		<div className={`${styles.content} d-flex flex-column justify-content-center `}>
			<div className={`d-flex align-items-center txt-overflow ml-2`}>
				{mainContent}
			</div>
			{extraContent ?
				(<div className={`${styles.extraContent} d-flex align-items-center ml-2`}>
					{extraContent}
				</div>) :
				null
			}

		</div>

		<div className={`${styles.footer} full-height d-flex align-items-center justify-content-between`}>
			<div className={`${styles.footerContent} full-height d-flex align-items-center justify-content-end`}>
				{footerContent}
			</div>
			{renderFooter(footerSymbol, onFooterSymbolClick, footerClass)}
		</div>

	</div>
);

export default VerticalTab;
