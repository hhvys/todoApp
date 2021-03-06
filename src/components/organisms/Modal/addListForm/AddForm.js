import React from 'react';
import PropTypes from 'prop-types';
import '../../../atoms/Icons/Icons.css';
import styles from '../modal.mod.scss';
import Icon from "../../../atoms/Icons/Icon";
import {DUPLICATE, TRASH} from "../../../atoms/Icons/constants";

class AddForm extends React.Component {

	handleChange = () => {
		this.setState({
			input: this.input.value.trim()
		});
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
	};

	constructor(props) {
		super(props);
		this.state = {input: ''}
	}

	componentWillReceiveProps(newProps) {
		const input = newProps.tabId ? newProps.tabName : '';
		this.setState({
			input,
			prevInput: input
		});
	}

	componentDidUpdate() {
		this.input.focus();
	}

	render() {
		const isDisabled = !this.state.input || this.state.input === this.state.prevInput;
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
						<Icon iconType={TRASH} onClick={this.handleDelete} className={styles.icon}/>
						<Icon iconType={DUPLICATE} onClick={this.handleDuplicate} className={styles.icon}/>
					</div>
					<div>
						<button className={`${styles.save} ${styles.button} ${isDisabled ? '' : styles.active}`}
										onClick={this.saveTab}
										type="submit"
										disabled={isDisabled}
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

}

AddForm.propTypes = {
	onCancel: PropTypes.func.isRequired,
	onSave: PropTypes.func.isRequired
};

export default AddForm;
