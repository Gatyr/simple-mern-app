import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import {createHashHistory} from 'history'
import DataService from './DataService'

export const history = createHashHistory()

class DataEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '', 
			post: ''
		};
		{/*this.state.value is initialized in the constructor, so that the text area starts with some text in it*/}
		this.addDataService = new DataService();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value 

		this.setState({
			[name]: value
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.addDataService.sendData(this.state);
		history.push('/');
	}
	render() {
		return(
		<div className="container" id="DataEntry">
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					<h3>Enter your name</h3>
					<input
					name="name" 
					type="text"
					value={this.state.name}
					onChange={this.handleChange} 
					className="form-control" />
					<h3>Enter your post</h3>
					<input
					name="post"
					type="text"
					value={this.state.post}
					onChange={this.handleChange} 
					className="form-control" />
				</label><br />
				<label></label><br/>
				<button type="submit" value="Submit" className="btn btn-primary" />
			</form>
		</div>
		)
	}
}

export default DataEntry