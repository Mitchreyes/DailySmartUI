import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recentposts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	handleSearchBarSubmit = function(query) {
		this.props.fetchPostsWithQuery(query, () => {
			this.props.history.push('/results');
		});
	};

	render() {
		return (
			<div className="home">
				<div className="logo-main">
					<Logo size={150} />
				</div>

				<div className="search-bar-container">
					<SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
				</div>

				<div className="recent-posts">
					<RecentPosts />
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(Home);
