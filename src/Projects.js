import React, { Component } from 'react';
import Task from './Task';
import Twitter from './Twitter';
import Reddit from './Reddit';
import Free from './Free';
import Player from './Player';
import Shot from './Shot';
import './style/Projects.css';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTask: false,
			showTwitter: false,
			showReddit: false,
			showFree: false,
			showPlayer: false,
			showShot: false
		};
		this.toggleTask = this.toggleTask.bind(this);
		this.toggleTwitter = this.toggleTwitter.bind(this);
		this.toggleReddit = this.toggleReddit.bind(this);
		this.toggleFree = this.toggleFree.bind(this);
		this.togglePlayer = this.togglePlayer.bind(this);
		this.toggleShot = this.toggleShot.bind(this);
	}

	toggleTask() {
		this.setState({
			showTask: !this.state.showTask 
		});
	}

	toggleTwitter() {
		this.setState({
			showTwitter: !this.state.showTwitter 
		});
	}

	toggleReddit() {
		this.setState({
			showReddit: !this.state.showReddit 
		});
	}

	toggleFree() {
		this.setState({
			showFree: !this.state.showFree 
		});
	}

	togglePlayer() {
		this.setState({
			showPlayer: !this.state.showPlayer 
		});
	}

	toggleShot() {
		this.setState({
			showShot: !this.state.showShot
		});
	}

	render() {
		return(
			<div className={"Projects" + (this.state.showTask ? ' task' : '')
										+ (this.state.showTwitter ? ' twitter' : '')
										+ (this.state.showReddit ? ' reddit' : '')
										+ (this.state.showFree ? ' free' : '')
										+ (this.state.showPlayer ? ' player' : '')
										+ (this.state.showShot ? ' shot' : '')}>
				<div className="project_list">
					<Task showTask={this.state.showTask}/>
					<Twitter showTwitter={this.state.showTwitter}/>
					<Reddit showReddit={this.state.showReddit}/>
					<Free showFree={this.state.showFree}/>
					<Player showPlayer={this.state.showPlayer}/>
					<Shot showShot={this.state.showShot}/>
					<div className="list_content">
						<ul>
							<li>
								<a href="http://tasks.ianhoportfolio.com/" onMouseEnter={this.toggleTask} onMouseLeave={this.toggleTask}
								 	style={((this.state.showTwitter || this.state.showReddit || this.state.showFree || this.state.showPlayer || this.state.showShot) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									Task Scheduler</a>
							</li>
							<li>
								<a href="http://twitterwordcloud.ianhoportfolio.com/" onMouseEnter={this.toggleTwitter} onMouseLeave={this.toggleTwitter}
								 	style={((this.state.showTask || this.state.showReddit || this.state.showFree || this.state.showPlayer || this.state.showShot) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									Twitter User Wordcloud</a>
							</li>
							<li>
								<a href="https://github.com/ho-ian/RedditScraper" onMouseEnter={this.toggleReddit} onMouseLeave={this.toggleReddit}
								 	style={((this.state.showTwitter || this.state.showTask || this.state.showFree || this.state.showPlayer || this.state.showShot) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									CLI Reddit Scraper</a>
							</li>
							<li>
								<a href="http://dredwardshen.ca/" onMouseEnter={this.toggleFree} onMouseLeave={this.toggleFree}
								 	style={((this.state.showTwitter || this.state.showReddit || this.state.showTask || this.state.showPlayer || this.state.showShot) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									Freelance Web Developer Project</a>
							</li>
							<li>
								<a href="/nbaplayereval.html" onMouseEnter={this.togglePlayer} onMouseLeave={this.togglePlayer}
									style={((this.state.showTwitter || this.state.showReddit || this.state.showFree || this.state.showTask || this.state.showShot) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									NBA Player Valuation</a>
							</li>
							<li>
								<a href="https://github.com/ho-ian/NbaShotCharts" onMouseEnter={this.toggleShot} onMouseLeave={this.toggleShot}
								 	style={((this.state.showTwitter || this.state.showReddit || this.state.showFree || this.state.showPlayer || this.state.showTask) ? {color: 'hsla(40, 42%, 73%, 0.0)'} : {})}>
									NBA Shot Charts</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={"tip" + (this.state.showReddit ? ' reddit' : '')}>
					Ian Ho made this. <br/>
					Hovering on links will show a summary of each project.<br/>
					Clicking on the link will take you to the project page.
				</div>
			</div>
		);
	}
}

export default Projects;