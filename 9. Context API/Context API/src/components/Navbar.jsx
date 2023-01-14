import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink className="navLink" to="/">
				Home
			</NavLink>

			<NavLink className="navLink" to="/about">
				Sobre
			</NavLink>

			<NavLink className="navLink" to="/contact">
				Contato
			</NavLink>
		</nav>
	);
};

export default Navbar;
