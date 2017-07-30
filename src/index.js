import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyCMgpQPH3y3iW657cxkSY3VqmiW8jAUKB4";

import SearchBar from './components/search_bar';



class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			console.log(data)
			this.setState({ videos });
			 //ES6 - whenever key and value are the same variable name can use name of key in curly braces i.e. { videos } 
			 //	this.setState({ videos: videos }) - syntactic sugar	
					});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
// Create a new component.  This component should produce
//some HTML


// One component per file!
// ES6 - javascript "silos"
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));