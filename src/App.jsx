//import { useState } from "react";

import "./App.css";

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
		</>
	);
}

export default App;
