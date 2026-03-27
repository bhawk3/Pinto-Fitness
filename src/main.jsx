import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DisplayData from "./displayData.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<DisplayData />
	</StrictMode>,
);
