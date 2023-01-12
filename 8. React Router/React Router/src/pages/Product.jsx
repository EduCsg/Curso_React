import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
	// 4 - Rota Dinâmica

	const params = useParams();

	// 5 - Carregamento de dado individual
	const url = "http://localhost:3000/products/" + params.id;
	const { data: product, loading, error } = useFetch(url);

	return (
		<>
			{error && <p>Ocorreu um erro...</p>}
			{loading && <p>Carregando...</p>}
			{product && (
				<div>
					<h1>{product.name}</h1>
					<h3>R$ {product.price}</h3>

					{/* 6 - Nested Routes */}
					<Link to={`/products/${params.id}/info`}>Mais informações</Link>
				</div>
			)}
		</>
	);
};

export default Product;
