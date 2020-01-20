import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';

class Results extends Component {
	handleSearchBarSubmit(query) {
		console.log(query);
	}

	render() {
		return (
			<div>
				<Logo size={105} />
				<SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
			</div>
		);
	}
}
export default Results;
