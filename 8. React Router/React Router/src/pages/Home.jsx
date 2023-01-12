import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
	// 3 - Carregamento de Dados

	const url = "http://localhost:3000/products";

	const { data: items, loading, error } = useFetch(url);

	return (
		<div>
			<h1>Produtos</h1>

			{error && <p>{error}</p>}
			<ul className="products">
				{loading && <p>Carregando...</p>}
				{items &&
					items.map((item) => (
						<li key={item.id}>
							<h2>{item.name}</h2>
							<p>{item.price}</p>

							{/* 4 - Rota Dinâmica */}
							<Link to={`/products/${item.id}`}>Detalhes</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Home;
