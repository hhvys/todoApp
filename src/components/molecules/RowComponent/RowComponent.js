import React from 'react';
import styles from './RowComponent.mod.scss';
import Icon from "../../atoms/Icons/Icon";

class RowComponent extends React.Component {

	handleHeaderIconClick = () => {
		const {onHeaderIconClick, headerClickArgs} = this.props;
		if(onHeaderIconClick && headerClickArgs)
			onHeaderIconClick(...headerClickArgs);
	};

	handleFooterIconClick = () => {
		const {onFooterIconClick, footerClickArgs} = this.props;
		if(onFooterIconClick && footerClickArgs)
			onFooterIconClick(...footerClickArgs);
	};

	renderFooter = () => {
		const {
			footerIcon,
			footerClass
		} = this.props;

		return footerIcon ? (
			<div className={`full-height d-flex align-items-center justify-content-center`}>
				<Icon className={`${footerClass ? footerClass : ''} ${styles.endIcon}`}
							onClick={this.handleFooterIconClick}
							iconType={footerIcon}
				/>
			</div>
		) : null;
	};

	render() {
		const {
			className,
			headerClass,
			onClick,
			headerIcon,
			footerContent,
			mainContent,
			extraContent,
		} = this.props;

		return (
			<div
				className={`${className ? className : ''} ${styles.verticalTab} full-width d-flex align-items-center justify-content-center`}
				onClick={onClick}
			>

				{/*headerDiv*/}
				<div className={`${styles.verticalTab} full-height d-flex align-items-center justify-content-center`}>
					<Icon className={`${headerClass ? headerClass : ''} `} onClick={this.handleHeaderIconClick}
								iconType={headerIcon}/>
				</div>

				{/*contentDiv*/}
				<div className={`${styles.content} d-flex flex-column justify-content-center `}>
					<div className={`txt-overflow ml-2`}>
						{mainContent}
					</div>

					{
						extraContent ?
							(
								<div className={`${styles.extraContent} d-flex align-items-center ml-2`}>
									{extraContent}
								</div>
							) :
							null
					}

				</div>

				{/*footerDiv*/}
				<div className={`${styles.footer} full-height d-flex align-items-center justify-content-between`}>

					<div className={`${styles.footerContent} full-height d-flex align-items-center justify-content-end`}>
						{footerContent}
					</div>

					{this.renderFooter()}

				</div>

			</div>
		)
	}
}

export default RowComponent;
