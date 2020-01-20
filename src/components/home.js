import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recentposts';

export default class Home extends Component {
	handleSearchBarSubmit = function(query) {
		console.log('trying to handle submit for query', query);
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
