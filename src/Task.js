import React, { Component } from 'react';
import img from './img/task.png';
import './style/Task.css';

class Task extends Component {

	render() {
		return(
			<div className={"Task" + (this.props.showTask ? ' in' : '')}>
				<h1>Task Scheduler</h1>
				<h2>What is this?</h2>
				<p>A web application that allows users to search and read tasks that have already been posted, edit tasks that have
					already been posted, post and edit tasks with a title, description, date, start and end times, and delete tasks.
				</p>
				<h2>How it works</h2>
				<p>This is a full stack web application built off of one object or entity, tasks. I describe the task in the backend
					as an object that has a title, author, description, date, start and end time that the user inputs. Once valid
					inputs are provided, a record is created and stored in a MongoDB server. The backend portion of this project
					can be polled via HTTP requests (GET, POST, PATCH, DELETE) as it is an Node.js Express application. The frontend
					portion of the project is made using ReactJS. It renders all changes and updates information in real time and
					is capable of searching through the list of tasks via title, author, date, start and end times, and whether they
					are complete or incomplete. To post a new task, click the '+' button on the right hand side which will open 
					multiple forms allowing you to type what you desire for a new task. Every task is clickable, which will show more
					information about the task. Once opened, a task is editable by clicking the 'Edit Task' button. In this mode, 
					you can change attributes of the task but will not be saved until you click 'Save'. You can also delete the
					task in this mode.
				</p>
				<h2>The Application</h2>
				<p>Clicking on the link you are hovering over now will bring you directly to web application in a new tab. Feel free
					to try it out, add a task, change a task, or delete a task. 
				</p>
				<img src={img} alt="task scheduler web page"></img>
			</div>
		);
	}
}

export default Task;