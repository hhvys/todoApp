import React from 'react';
import PropTypes from 'prop-types';
import '../../../atoms/logos/logos.css';
import './addForm.css';
import Symbol from "../../../atoms/logos/Symbol";
import {DUPLICATE, TRASH} from "../../../atoms/logos/constants";

class AddForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {input: ''}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			input: newProps.tabId ? newProps.tabName : ''
		});
	}

	componentDidUpdate() {
		this.input.focus();
	}

	updateSaveButton = () => (
		this.input.value.trim() ?
			this.save.classList.add('active') :
			this.save.classList.remove('active')
	);

	handleChange = () => {
		this.setState({
			input: this.input.value.trim()
		});
		this.updateSaveButton();
	};

	handleDelete = (e) => {
		this.cancel(e);
		this.props.onDelete(this.props.tabId);
	};

	handleDuplicate = (e) => {
		this.cancel(e);
		this.props.onDuplicate(this.props.tabId)
	};

	onPressEnter = (e) => {
		if (e.nativeEvent.keyCode === 13)
			this.saveTab(e);
	};

	render() {
		return (
			<div className="full-size">
				<div className="inputName">
					<input
						type="text"
						name="add-list"
						placeholder="List Name"
						ref={node => this.input = node}
						autoComplete="off"
						onChange={this.handleChange}
						onKeyUp={this.onPressEnter}
						value={this.state.input}
					/>
				</div>
				<div className={
					!this.props.tabId ?
						"footer d-flex justify-content-end" :
						"footer d-flex justify-content-between"
				}
				>
					<div className={
						!this.props.tabId ?
							"delete hide" :
							"delete"
					}>
						<Symbol symbolType={TRASH} onClick={this.handleDelete}/>
						<Symbol symbolType={DUPLICATE} onClick={this.handleDuplicate}/>
					</div>
					<div>
						<button className="save"
										onClick={this.saveTab}
										type="submit"
										ref={node => this.save = node}
										disabled={!this.state.input}
						>
							Save
						</button>
						<button onClick={this.cancel}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.input.focus();
	}

	cancel = (e) => {
		e.preventDefault();
		this.props.onCancel(this.props.tabId);
		this.input.value = '';
		this.save.classList.remove('active');
	};

	saveTab = (e) => {
		e.preventDefault();
		if (this.input.value.trim()) {
			this.props.onSave(
				this.props.tabId,
				this.input.value.trim()
			);
			this.props.onCancel();
		}
		this.input.value = '';
		this.save.classList.remove('active');
	}

};

AddForm.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default AddForm;