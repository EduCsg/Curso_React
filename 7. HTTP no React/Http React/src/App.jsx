import "./App.css";

import { useState } from "react";

//4 - Custom Hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

/*
  Conteúdo estudados

  Criação de uma FakeAPI com o Json Server
  Hook useEffect
  Fetch API
  Carregamento Dinâmico
  Custom Hook

*/

function App() {
	// 4 - Custom Hook

	const { data: items, httpConfig, loading, error } = useFetch(url);

	const [name, setName] = useState("");
	const [price, setPrice] = useState("");

	//1 - Resgatando dados

	// useEffect(() => {
	// 	async function loadData() {
	// 		const res = await fetch(url);

	// 		const data = await res.json();

	// 		setProducts(data);
	// 	}

	// 	loadData();
	// }, []);

	//2 - add produtos
	const handleSubmit = async (e) => {
		e.preventDefault();

		const product = {
			name,
			price,
		};

		// const res = await fetch(url, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},

		// 	body: JSON.stringify(product),
		// });

		// // 3 - Carregamento Dinâmico
		// const addedProduct = await res.json();

		// setProducts((prevProducts) => [...prevProducts, addedProduct]);

		// 5 - Refatorando POST

		httpConfig(product, "POST");

		setName("");
		setPrice("");
	};

	const handleDelete = (e, id) => {
		e.preventDefault();

		const product = {
			id: id,
			name,
			price,
		};

		httpConfig(product, "DELETE");
	};

	return (
		<div className="App">
			<h1>Lista de produtos</h1>

			{/* 6 - Loading */}
			{error && <p>{error}</p>}
			{loading && <p>Carregando dados...</p>}

			{!loading && (
				<ul className="show-products">
					{items &&
						items.map((product) => (
							<li key={product.id}>
								{product.name} - {product.price}
								<button
									className="remBtn"
									onClick={(e) => handleDelete(e, product.id)}
								>
									X
								</button>
							</li>
						))}
				</ul>
			)}

			<div className="add-product">
				<form onSubmit={handleSubmit}>
					<label>
						Nome:
						<input
							type="text"
							value={name}
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
					<label>
						Preço:
						<input
							type="number"
							value={price}
							name="price"
							onChange={(e) => setPrice(e.target.value)}
						/>
					</label>

					{/* 7 - State de Loading no POST */}

					{loading && (
						<button type="submit" disabled>
							Aguarde...
						</button>
					)}
					{!loading && <button type="submit">Enviar</button>}
				</form>
			</div>
		</div>
	);
}

export default App;

//npm run server
//npm run dev
