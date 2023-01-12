import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div>
			<h2>Ops! Página não encontrada!</h2>
			<button>
				<Link to={"/"}>Voltar para home</Link>
			</button>
		</div>
	);
};

export default NotFound;
