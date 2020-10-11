import React from "react";
import Dinner from "./Dinner";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>Hello Arisha How are You? I am Kashif.</h1>
			<Dinner dish="Chicken" />
			<Dinner dish="Biryani" />
			<Dinner dish="Karhai" />
			<Dinner dish="Broast" />
		</div>
	);
}

export default App;
