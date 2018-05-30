import React from 'react';
import SortCreation from "../../../logos/SortCreation";
import Star from '../../../logos/Star';
import Sort from '../../../logos/Sort';
import {SORT_BY} from '../../../../actions/actionTypes';
import '../../../logos/logos.css';

const DropDown = ({onClick, className, changeSort}) => {
	return (
		<div onClick={onClick} className={className}>
			<div className="options d-flex align-items-center" onClick={() => changeSort(SORT_BY.SORT_ALPHA)}>
				<div className="symbol d-flex align-items-center">
					<Sort style={{fill: 'white'}}/>
				</div>
				<div className="symbol-content">
					Sort Alphabetically
				</div>
			</div>

			<div className="options d-flex align-items-center" onClick={() => changeSort(SORT_BY.SORT_CREATION)}>
				<div className="symbol d-flex align-items-center">
					<SortCreation style={{fill: 'white'}}/>
				</div>
				<div className="symbol-content">
					Sort by Creation Date
				</div>
			</div>

			<div className="options d-flex align-items-center" onClick={() => changeSort(SORT_BY.SORT_PRIORITY)}>
				<div className="symbol d-flex align-items-center">
					<Star style={{fill: 'white'}}/>
				</div>
				<div className="symbol-content">
					Sort by Priority
				</div>
			</div>

		</div>
	);
};

export default DropDown;