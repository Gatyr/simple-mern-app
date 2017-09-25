import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'
import DataService from './DataService';
import TableRow from './TableRow'

class DataDisplay extends Component {
	constructor(props) {
		super(props);
		this.addDataService = new DataService();
		this.state = {value: '', items: ''};
	}
	

	componentDidMount() {
		axios.get('http://localhost:4200/items')
		.then(response => {
			console.log("componentDidMount response data: " + response.data)
			this.setState({value: response.data});
		})
		.catch(function(error) {
			console.log(error);
		});
	}
	componentDidUpdate() {
		axios.get('http://localhost:4200/items')
		.then(response => {
			this.setState({items: response.data});
		})
	}

	tabRow() {
		if (this.state.items instanceof Array) {
			return this.state.items.map(function(object, i) {
				return <TableRow obj={object} key={i} />;
			})
		}
	}
	
	render() {
		return(
		<div className="container" id="DataDisplay">
			<table className="table table-striped">
				<thead>
					<tr>
						<td>Name</td>
						<td>Date</td>
						<td>Post</td>
					</tr>
				</thead>
				<tbody>
					{this.tabRow()}
				</tbody>
			</table>
		</div>
		)
	}
}

export default DataDisplay