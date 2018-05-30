import React from 'react';
import PropTypes from 'prop-types';

let inputNode;

const submit = (e, tabId, onTodoSubmit) => {
	e.preventDefault();
	inputNode.value.trim() &&
		onTodoSubmit(tabId, inputNode.value.trim())
	inputNode.value = '';
};

const InputTodoView = ({className, onTodoSubmit, tabId, query}) => {
	if (!query) {
		return (
			<div className={className}>
				<form onSubmit={(e) => submit(e, tabId, onTodoSubmit)}>
					<div className="add-todo">
						<label className="add-symbol"
									 htmlFor="add-todo">
							+
						</label>
						<input type="text"
									 id="add-todo"
									 placeholder={
										 tabId === 1 ?
											 'Add a starred to-do in "Inbox"' :
											 "Add a to-do..."
									 }
									 ref={node => inputNode = node}
									 autoComplete="off"
						/>
					</div>
				</form>
			</div>
		)
	}
	return <div></div>
};

InputTodoView.propTypes = {
	className: PropTypes.string.isRequired,
	onTodoSubmit: PropTypes.func.isRequired,
	tabId: PropTypes.number.isRequired
}

export default InputTodoView;