import "./App.css";

// 1 - Config react router

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
	return (
		<div className="App">
			<h1>React Router</h1>

			<BrowserRouter>
				{/* 2 - Links com reactRouter */}
				<Navbar />

				{/* 9 - SearchParams */}
				<SearchForm />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />

					{/* 4 - Rota dinâmica */}
					<Route path="/products/:id" element={<Product />} />

					{/* 6 - Nested Route */}
					<Route path="/products/:id/info" element={<Info />} />

					{/* 9 - Search Params */}
					<Route path="/search" element={<Search />} />

					{/* 10 - Redirect */}
					<Route path="/company" element={<Navigate to="/about" />} />

					{/* 7 - No match route */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
