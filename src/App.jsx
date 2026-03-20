//import { useState } from "react";

import "./App.css";
import Display from "./display.jsx";

//Generate mock data
//Fetch mock data as if it was real api
//Pass mock data into display component through props

function App() {
	return (
		<>
			<section id="center">
				<div className="hero">
					<h1>Pinto Fitness</h1>
					<br />
					<p>Welcome to Pinto Fitness! Here you will find exercise ideas for various muscle groups. Type in a muscle group and see what comes up!</p>
					<br />
					<label for="search">Search:</label>&nbsp;
					<input type="text" id="search" name="search" placeholder="e.g. chest, shoulders, biceps"></input>
				</div>
			</section>

			<Display />
		</>
	);
}

export default App;
