import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props); // Component has its own constructor function

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term} // input is now a controlled component, value set by state
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}

	
}

export default SearchBar;