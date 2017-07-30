import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { term: '' };
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term} // input is now a controlled component, value set by state
					onChange={event => this.setState({ term: event.target.value})} />
					

			</div>
		);
	}

	
}

export default SearchBar;