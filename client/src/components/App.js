import React from 'react';
// import HomePage from "../pages/home";
import MessageList from "../components/MessageList";

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
	}

	callAPI() {
		fetch("/testAPI")
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
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
