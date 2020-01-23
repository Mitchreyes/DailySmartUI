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
			<div>
				<div className="logo">
					<Logo size={105} />
				</div>
				<SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
				<div className="results-posts">
					<ResultsPosts />
				</div>
			</div>
		);
	}
}
export default connect(null, actions)(Results);
