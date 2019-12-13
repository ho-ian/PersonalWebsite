import React, { Component } from 'react';
import './style/Player.css';
import img from './img/nba_logo.png';

class Player extends Component {

	render() {
		return(
			<div className={"Player" + (this.props.showPlayer ? ' in' : '')}>
				<h1>NBA Player Valuation</h1>
				<h2>What do we want to evaluate?</h2>
				<p>Determining if NBA Players from the 2018-2019 season were overpaid, underpaid, or paid correctly.</p>
				<h2>Evaluation Metrics</h2>
				<p>Collected general offensive, defensive, and advanced in game statistics using nbastatR library.
					Used a medley of stats like points per game, offensive/defensive box plus minus, player efficiency, 
					and more to determine a players overall offensive and defensive strengths relative to the league averages.
					If the player performs above league average consistently while being paid above the league average for 
					their specific position, then they are being correctly paid. If they are being paid less, they are being underpaid.
				</p>
				<h2>Conclusion</h2>
				<p>Many players in the league are currently being overpaid and many players are also significantly underpaid.
					For example, players like the most improved player, Pascal Siakam, performed extremely well in the 2018-2019 season
					but was paid significantly less than the league average, making him one of the few players that were in the underpaid
					category. While my the metrics I chose were subjective, they fall in line with how people tend to view
					value in basketball. However, there are a lot of other things that players bring to an organization besides 
					stats on a piece of paper at the end of the day. Some things cannot be recorded and some things like popularity
					and the influence they have over jersey sales aren't easily tabulated.
				</p>
				<h2>Full Writeup</h2>
				<p>Click on this invisible link right now to take you there.</p>
				<img src={img} alt="nba logo"></img>
			</div>
		);
	}
}

export default Player;