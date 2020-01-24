import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import ResultsPosts from './resultsPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {
	handleSearchBarSubmit(query) {
		this.props.fetchPostsWithQuery(query);
	}
	render() {
		return (
			<div className="results-wrapper">
				<div className="logo-container">
					<Logo size={150} />
				</div>
				<div className="search-bar-container">
					<SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
				</div>
				<div className="results-posts-container">
					<ResultsPosts />
				</div>
			</div>
		);
	}
}
export default connect(null, actions)(Results);
