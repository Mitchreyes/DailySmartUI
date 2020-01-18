import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recentposts';

export default class Home extends Component {
	render() {
		return (
			<div className="container">
				<div className="logo">
					<Logo />
				</div>

				<div className="search">
					<SearchBar />
				</div>

				<div className="recent">
					<RecentPosts />
				</div>
			</div>
		);
	}
}
