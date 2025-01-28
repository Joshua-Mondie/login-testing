/** @format */

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div className=" md:w-[768px] border border-red-400 ">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
