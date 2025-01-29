/** @format */

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import LoginScreen from "./pages/LoginScreen";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<Routes>
			<Route path="/" element={<LoginScreen />} />

			<Route path="/landingpage" element={<LandingPage />} />
		</Routes>
	);
}

export default App;
