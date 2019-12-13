import React, { Component } from 'react';
import img from './img/shot_chart.png';
import './style/Shot.css';

class Shot extends Component {

	render() {
		return(
			<div className={"Shot" + (this.props.showShot ? ' in' : '')}>
				<h1>NBA Shot Charts Summary</h1>
				<h2>What is this?</h2>
				<p>A Shiny Web App that visualizes NBA players' shot chart details on a graphically drawn court.</p>
				<h2>How it works</h2>
				<p>This app uses shiny server technologies from RStudio. There are a variety of options to choose from to visualize 
					every players' shot charts from several seasons. A user can look at every NBA players shots by locations, makes and misses,
					and they can see how well they do in the regular season, playoffs, or preseason. All of the data is gathered through
					the nbastatR library and from that their stats are taken directly from the official nba stats api.
				</p>
				<h2>Online deployment</h2>
				<p>I tried deploying my web application online via shinyapps.io, 
					however, I later found out that the official nba stats api blocks certain ips (likely to prevent unwanted
					web scraping by bots). This invariably caused my web app to fail to work and so I tried to deploy the app 
					on my own using Docker and AWS ECS services. Unfortunately, while the application deployed successfully,
					the IP blocking was still prevalent, rendering my app unusable online.
				</p>
				<h2>The Application</h2>
				<p>
					Click on this invisible link to take you to my github repo. There you can clone my repo and run it for yourself
					on RStudio.
				</p>
				<img src={img} alt="stephen curry shot chart"></img>
			</div>
		);
	}
}

export default Shot;