import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recentposts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	handleSearchBarSubmit = function(query) {
		this.props.fetchPostsWithQuery(query);
		this.props.history.push('/results');
	};

	render() {
		return (
			<div className="container">
				<div className="logo">
					<Logo />
				</div>

				<div className="search">
					<SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
				</div>

				<div className="recent">
					<RecentPosts />
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(Home);
