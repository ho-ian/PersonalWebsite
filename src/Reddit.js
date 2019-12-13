import React, { Component } from 'react';
import img from './img/reddit.png';
import './style/Reddit.css';

class Reddit extends Component {

	render() {
		return(
			<div className={"Reddit" + (this.props.showReddit ? ' in' : '')}>
				<h1>CLI Reddit Scraper</h1>
				<h2>What is this?</h2>
				<p>A command line interface application that scrapes any number of reddit's subreddits along with options
					for reddit's sorting options such as new, rising, controversial, and top. Alongside controversial and top
					comes hour, day, week, month, and year additional sorting options. The application will then log the results
					of the scores of each post and the titles of each post onto the command line.
				</p>
				<h2>How it works</h2>
				<p>The application is written in Javascript using Node.js and a library named 'scrape'. When used, the application
					takes in any number of additional arguments in any order and will form a valid link that will then be used to
					fetch the html page that will return all the information about those posts. Each post is then extracted for
					its score and title.
				</p>
				<h2>The Application</h2>
				<p>Click this invisible link and clone the repo from my github link. You can use the application as long as you have
					Node.js and a command line interface.
				</p>
				<img src={img} alt="cli reddit scrape example"></img>
			</div>
		);
	}
}

export default Reddit;