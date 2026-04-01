import "./display.css";
import { useState, useEffect } from "react";

//import { useState, useEffect } from "react";

//I will need to pass data from user down through props
//I should probably generated the cards more dynamically

//h3 on first card is only targeting the group of "chest" but not the individual exercise

export default function Display({ data, filter }) {
	//console.log("Display props.filter:", props.filter);
	//console.log("Display props.data:", props.data);
	const [randomLift, setRandomLift] = useState([]);

	useEffect(() => {
		const selectedGroup = data.muscle_groups.find((g) => g.group.toLowerCase() === filter.toLowerCase()) || data.muscle_groups[0];
		const exercises = selectedGroup.exercises || [];
		setRandomLift([...exercises].sort(() => Math.random() - 0.5).slice(0, 3));
	}, [data, filter]);

	return (
		<>
			<h2>Here are three exercises for this muscle group</h2>

			<div className="card-container">
				{randomLift.map((workout) => (
					<div className="card" key={workout.id}>
						<h3>{workout.name}</h3>
						<br />
						<p>{workout.group}</p>
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
