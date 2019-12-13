import React, { Component } from 'react';
import Typical from 'react-typical';
import Projects from './Projects';
import './style/App.css';

const steps = ['Hello World', 1000,
  'I\'m Ian Ho', 600,
  'I am a', 400,
  'SFU Graduate', 400,
  'Who likes to', 350,
  'Build Web Applications', 400,
  'Solve Technical Problems', 400,
  'and Analyze Data.', 400,
  'Feel free to look around!', 750,
  ':)', 1000
];

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div id="page1">
			<div className="info">
				<a class="links" href="http://github.com/ho-ian">GITHUB</a><br />
				<a class="links" href="http://linkedin.com/in/hoian96">LINKEDIN</a> <br />
			</div>
			<div className="intro">
				<Typical className="intro_content" steps={steps}
						loop={Infinity}
						wrapper="p" />
			</div>
			<div className="icon">
				<a href="#page2"d><span className="chevron"></span></a>
			</div>
        </div>
		<div id="page2">
			<div className="icon2">
				<a href="#page1"d><span className="chevron2"></span></a>
			</div>
			<Projects />
        </div>
      </div>
      
    )
  }
}

export default App;
