import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { HookUseContext } from "./components/HookUseContext";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<div className="container">
			<HookUseContext>
				<h1>React Hooks</h1>

				<BrowserRouter>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</HookUseContext>
		</div>
	);
}

export default App;
