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
				<Logo size={150} />
				<SearchBar page="home" onSubmit={(query) => this.handleSearchBarSubmit(query)} />
				<RecentPosts />
			</div>
		);
	}
}

export default connect(null, actions)(Home);
