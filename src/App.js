import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<nav>
						<h1>Jaboarouter</h1>
						<NavLink to="/">Home</NavLink>
						<NavLink to="about">About</NavLink>
					</nav>
				</header>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
