import React from 'react';
import MessageList from "../components/MessageList";

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
	}

	callAPI = async() => {
		fetch("/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }))
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.callAPI();
	}

	render(){
		return (
			<div>
				<div><MessageList/></div>
				<p className="App-intro">{this.state.apiResponse}</p>
			</div>
		);
	}
}

// const App = () => {   //this is how you make a functional component
// 	return (
// 		<div><MessageList/></div>
// 	);
// }

export default App;
