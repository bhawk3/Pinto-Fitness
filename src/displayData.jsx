import React, { useState, useEffect } from "react";
import Display from "./display.jsx";
import App from "./App.jsx";

export default function DisplayData() {
	const [data, setData] = useState(null);
	const [query, setQuery] = useState("");

	useEffect(() => {
		fetch("./workoutData.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.json();
			})
			.then((data) => setData(data))
			.catch((error) => console.log("Error fetching data", error));
	}, []);

	if (!data) {
		return <p>Loading...</p>;
	}

	const handleChange = (e) => {
		setQuery(e.target.value);
		console.log("Query updated to:", e.target.value);
	};

	return (
		<>
			<App value={query} onChange={handleChange} />
			<Display data={data} filter={query} />
		</>
	);
}
