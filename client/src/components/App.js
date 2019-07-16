import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import MessageList from "../components/MessageList";
import Welcome from "../components/Welcome";
// import Page1 from './page1'

const App = () => {   //this is how you make a functional component
	return (
		<Router>
			<div>
				{/* <Route path="/" component={Welcome} /> */}
				<Route path= "/" component={MessageList} />
			</div>
		</Router>
	);
}

export default App;
