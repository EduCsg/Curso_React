import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {
	const { id } = useParams();

	const url = "http://localhost:3000/products/" + id;
	const { data: product, loading, error } = useFetch(url);

	// Eu mesmo fiz
	const navigate = useNavigate();

	return (
		<div>
			{product && (
				<>
					<h2>Mais informações sobre {product.name}</h2>
					<h2>Preço: {product.price}</h2>
					<h2>ID: {product.id}</h2>
				</>
			)}

			{/* Eu mesmo fiz */}
			<button onClick={() => navigate(-1)}>Voltar</button>
		</div>
	);
};

export default Info;
