import React, { Component } from 'react';
import img from './img/free.png';
import './style/Free.css';

class Free extends Component {

	render() {
		return(
			<div className={"Free" + (this.props.showFree ? ' in' : '')}>
				<h1>Dr. Edward Shen Website Summary</h1>
				<h2>What is this?</h2>
				<p>A website that I developed for a client of mine who specializes in clinical psychology.
					The client wished to keep the old design of the website but I recreated it to easily
					implement responsive technologies for mobile viewing purposes.
				</p>
				<h2>How it works</h2>
				<p>This website was built using HTML, CSS, and Javascript. The website features tabs and two
					different languages, English and Chinese. The website makes use of CSS to make mobile viewing
					more readable.
				</p>
				<h2>The Website</h2>
				<p>Click on the invisible link you're hovering on right now to go there.
					I helped my client host it on Amazon Web Services.
				</p>
				<img src={img} alt="dredward shen website"></img>
			</div>
		);
	}
}

export default Free;