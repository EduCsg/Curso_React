import { useState, useEffect } from "react";

// 4 - Custom Hook

export const useFetch = (url) => {
	const [data, setData] = useState(null);

	// 5 - Refatorando o POST
	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFetch, setCallFetch] = useState(false);

	// 6 - Loading
	const [loading, setLoading] = useState(false);

	// 7 - Tratando erros
	const [error, setError] = useState(null);

	// 8 - Desafio
	const [itemId, setItemId] = useState(null);

	const httpConfig = (data, method) => {
		setLoading(true);

		if (method === "POST") {
			setConfig({
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			setMethod(method);
		} else if (method === "DELETE") {
			setItemId(data.id);

			setConfig({
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			setMethod(method);
		}

		setLoading(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			// 6 - Loading
			setLoading(true);

			try {
				const res = await fetch(url);

				const json = await res.json();

				setData(json);
			} catch (error) {
				console.log(error.message);

				setError("Houve algum erro ao carregar os dados!");
			}

			setLoading(false);
		};

		fetchData();
	}, [url, callFetch]);

	// 5 - Refatorando POST
	useEffect(() => {
		const httpRequest = async () => {
			if (method === "POST") {
				setLoading(true);

				let fetchOptions = [url, config];

				const res = await fetch(...fetchOptions);

				const json = await res.json();

				setCallFetch(json);
			} else if (method === "DELETE") {
				setLoading(true);

				const deleteUrl = `${url}/${itemId}`;

				const res = await fetch(deleteUrl, config);

				const json = await res.json();

				setCallFetch(json);
			}
		};

		httpRequest();
	}, [config, method, url]);

	return { data, httpConfig, loading, error };
};
