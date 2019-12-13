import React, { Component } from 'react';
import img from './img/twitter.png';
import './style/Twitter.css';

class Twitter extends Component {

	render() {
		return(
			<div className={"Twitter" + (this.props.showTwitter ? ' in' : '')}>
				<h1>Twitter User Wordcloud</h1>
				<h2>What is this?</h2>
				<p>A web application that a user can search for a twitter username and
					scrapes the last 200 tweets of a specified twitter user and extracts and counts
					all the words they use to form a wordcloud.
				</p>
				<h2>How it works</h2>
				<p>This app was built using Node.js, HTML, and CSS. I use my twitter authentication tokens to access
					Twitter's API in order to obtain Twitter User's Timelines via the Twitter node module before using 
					Javascript regex to clean the tweet data of punctuation and links as well as mentions and hashtags.
					After, I create a wordcloud based on word frequency via the D3 javascript library.
				</p>
				<h2>The Application</h2>
				<p>Click on this invisible link to take you there.
				</p>
				<img src={img} alt="twitter user wordcloud"></img>
			</div>
		);
	}
}

export default Twitter;