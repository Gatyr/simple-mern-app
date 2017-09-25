import axios from 'axios'

class DataService {
	sendData(data) {
		axios.post('http://localhost:4200/items/add/post', {
			name: data.name,
			post: data.post
			
		})
		.then(res => this.setState({ items: res.data }))
		.catch(err => console.log(err));
		console.log(data + "...this is from the sendData function in DataService")
		console.dir(data);
	}

	updateData(data, id) {
		axios.post('http://localhost:4200/items/update/' + id, {
			name: data
		})
		.then(res => this.setState({items: res.data}))
		.catch(err => console.log(err));
	}	

	deleteData(id) {
		axios.get('http://localhost:4200/items/delete/'+id)
		.then().catch(err => console.log(err));
	}
}

export default DataService;