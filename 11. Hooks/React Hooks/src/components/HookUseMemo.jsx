import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
	const [number, setNumber] = useState(0);

	// a cada alteração dentro do input, o componente é renderizado novamente
	// ou seja, o premiumNumbers é gerado novamente e ativa o useEffect
	// const premiumNumbers = ["0", "100", "200"];

	// a maneira correta, para nao ser gerado automaticamente é:
	const premiumNumbers = useMemo(() => {
		return ["0", "100", "200"];
	}, []);
	// dessa maneira, ele só será executado e atrelado a const uma única vez
	// alem disso, o useEffect so vai ser executado na primeira vez também, pois
	// o valor está memorizado e não está sendo mais alterado

	useEffect(() => {
		console.log("Premium Numbers foi alterado");
	}, [premiumNumbers]);

	return (
		<div>
			<hr />
			<h2>UseMemo</h2>
			<input type="text" onChange={(e) => setNumber(e.target.value)} />

			{premiumNumbers.includes(number) ? <p>Acertou!</p> : <p>Errou!</p>}
		</div>
	);
};

export default HookUseMemo;
