import "./display.css";

//import { useState, useEffect } from "react";

//I will need to pass data from user down through props
//I should probably generated the cards more dynamically

//h3 on first card is only targeting the group of "chest" but not the individual exercise

export default function Display(props) {
	console.log("Display props.filter:", props.filter);
	console.log("Display props.data:", props.data);
	const selectedGroup = props.data.muscle_groups.find((g) => g.group.toLowerCase() === props.filter.toLowerCase()) || props.data.muscle_groups[0];
	console.log("Selected group:", selectedGroup);
	const exercises = selectedGroup.exercises[0] || [];

	return (
		<>
			<h2>Here are three exercises for this muscle group</h2>
			<div className="card-container">
				<div className="card">
					<h3>{exercises.name}</h3>
					<br />
					<p>{exercises.description}</p>
					<br />
					<p>
						Do: {exercises.sets} Sets with {exercises.reps} reps
					</p>
				</div>
				<br />
				<div className="card">
					<h3>NAME OF EXERCISE</h3>
					<br />
					<p>Quick description/instructions</p>
					<br />
					<p>Do: xyz Sets with xyz reps</p>
				</div>
				<br />
				<div className="card">
					<br />
					<h3>NAME OF EXERCISE</h3>
					<br />
					<p>Quick description/instructions</p>
					<br />
					<p>Do: xyz Sets with xyz reps</p>
				</div>
			</div>
		</>
	);
}
