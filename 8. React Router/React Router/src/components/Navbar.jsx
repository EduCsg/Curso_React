// 2 - Links com reactRouter

import "./Navbar.css";

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			{/* <Link to={"/"}>Home</Link>
			<Link to={"/about"}>Sobre</Link> */}

			{/* Link Ativo */}
			<NavLink
				to="/"
				//por padrao, o componente recebe a classe .active quando está selecionado na URL
				//porem, pode ser feito também da seguinte maneira:

				// className={({ isActive }) => (isActive ? "ativo" : "desativado")}
			>
				Home
			</NavLink>
			<NavLink to="/about">Sobre</NavLink>
		</nav>
	);
};

export default Navbar;
