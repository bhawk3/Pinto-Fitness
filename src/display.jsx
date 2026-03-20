import "./display.css";

//I will need to pass data from user down through props
//I should probably generated the cards more dynamically

export default function Display() {
	return (
		<>
			<h2>Here are three exercises for this muscle group</h2>
			<div className="card-container">
				<div className="card">
					<img src="#" alt="" width="100"></img>
					<br />
					<h3>NAME OF EXERCISE</h3>
					<br />
					<p>Quick description/instructions</p>
				</div>
				<br />
				<div className="card">
					<img src="#" alt="" width="100"></img>
					<br />
					<h3>NAME OF EXERCISE</h3>
					<br />
					<p>Quick description/instructions</p>
				</div>{" "}
				<br />
				<div className="card">
					<img src="#" alt="" width="100"></img>
					<br />
					<h3>NAME OF EXERCISE</h3>
					<br />
					<p>Quick description/instructions</p>
				</div>
			</div>
		</>
	);
}
