import "./display.css";
import { useState, useEffect } from "react";

//import { useState, useEffect } from "react";

//I will need to pass data from user down through props
//I should probably generated the cards more dynamically

//h3 on first card is only targeting the group of "chest" but not the individual exercise

export default function Display(props) {
	//console.log("Display props.filter:", props.filter);
	//console.log("Display props.data:", props.data);
	const selectedGroup = props.data.muscle_groups.find((g) => g.group.toLowerCase() === props.filter.toLowerCase()) || props.data.muscle_groups[0];
	//	console.log("Selected group:", selectedGroup);
	const exercises = selectedGroup.exercises || [];

	//Somehow map over the exercises returned

	//prob need to use usememo

	const [randomLift, setRandomLift] = useState([]);

	useEffect(() => {
		if (exercises.length > 0) {
			const shuffle = [...exercises].sort(() => Math.random() - 0.5);
			const selected = shuffle.slice(0, 3);

			setRandomLift(selected);
		}
	}, [props.filter, props.data]);

	return (
		<>
			<h2>Here are three exercises for this muscle group</h2>

			<div className="card-container">
				{randomLift.map((workout) => (
					<div className="card" key={workout.id}>
						<h3>{workout.name}</h3>
						<br />
						<p>{workout.description}</p>
						<br />
						<p>
							Do: {workout.sets} Sets with {workout.reps} reps
						</p>
					</div>
				))}
				<br />
			</div>
		</>
	);
}
