import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPosts from './recentposts';

export default class App extends Component {
	render() {
		return (
			<div class="container">
				<div class="logo">
					<Logo />
				</div>

				<div class="search">
					<SearchBar />
				</div>

				<div class="recent">
					<RecentPosts />
				</div>
			</div>
		);
	}
}
