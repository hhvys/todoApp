import React from 'react';
import PropTypes from 'prop-types';
import '../../../atoms/logos/logos.css';
import styles from '../modal.scss';
import Symbol from "../../../atoms/logos/Symbol";
import {DUPLICATE, TRASH} from "../../../atoms/logos/constants";

class AddForm extends React.Component {

	updateSaveButton = () => (
		this.input.value.trim() ?
			this.save.classList.add(styles.active) :
			this.save.classList.remove(styles.active)
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
	cancel = (e) => {
		e.preventDefault();
		this.props.onCancel(this.props.tabId);
		this.input.value = '';
		this.save.classList.remove(styles.active);
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
		this.save.classList.remove(styles.active);
	}

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

	render() {
		return (
			<div className="full-size">
				<div className="inputName">
					<input className={styles.input}
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
						`${styles.footer} d-flex justify-content-end` :
						`${styles.footer} d-flex justify-content-between`
				}
				>
					<div className={
						!this.props.tabId ?
							styles.hide :
							styles.delete
					}>
						<Symbol symbolType={TRASH} onClick={this.handleDelete}/>
						<Symbol symbolType={DUPLICATE} onClick={this.handleDuplicate}/>
					</div>
					<div>
						<button className={`${styles.save} ${styles.button}`}
										onClick={this.saveTab}
										type="submit"
										ref={node => this.save = node}
										disabled={!this.state.input}
						>
							Save
						</button>
						<button
							className={styles.button}
							onClick={this.cancel}
						>
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

};

AddForm.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default AddForm;
