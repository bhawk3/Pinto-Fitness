import "./display.css";
import workoutData from "/workoutData.json";

//I will need to pass data from user down through props
//I should probably generated the cards more dynamically

//h3 on first card is only targeting the group of "chest" but not the individual exercise

export default function Display() {
	return (
		<>
			<h2>Here are three exercises for this muscle group</h2>
			<div className="card-container">
				<div className="card">
					<h3>{workoutData.muscle_groups[0].exercises[0].name}</h3>
					<br />
					<p>{workoutData.muscle_groups[0].exercises[0].description}</p>
					<br />
					<p>
						Do: {workoutData.muscle_groups[0].exercises[0].sets} Sets with {workoutData.muscle_groups[0].exercises[0].reps} reps
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
