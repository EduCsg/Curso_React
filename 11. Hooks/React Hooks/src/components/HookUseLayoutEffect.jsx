import { useState, useEffect, useLayoutEffect } from "react";

const HookUseLayoutEffect = () => {
	const [name, setName] = useState("Nome inicial");

	useEffect(() => {
		// 4
		console.log("2");

		// 5
		setName("Nome alterado");
	}, []);

	useLayoutEffect(() => {
		// 2
		console.log("1");

		// 3
		setName("Nome do layout");
	}, []);

	// 1
	console.log(name);

	return (
		<div>
			<hr />
			<h2>UseLayoutEffect</h2>
			<p>nome: {name}</p>
		</div>
	);
};

export default HookUseLayoutEffect;
