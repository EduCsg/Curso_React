import { useEffect, useState } from "react";

const HookUseEffect = () => {
	// 1 - UseEffect, sem dependências
	// sem array, é executado toda vez que re-renderiza o componente
	useEffect(() => {
		console.log("Componente Re-Renderizado!");
	});

	const [number, setNumber] = useState(1);

	const changeSomething = () => {
		setNumber(Math.floor(Math.random() * 100));
	};

	// 2 - Array de Dependências Vazio
	// com array vazio, é executado apenas uma vez na inicialização do componente
	useEffect(() => {
		console.log("Sou executado apenas na inicialização!");
	}, []);

	// 3 - Itens no array de dependências
	// quando há itens no array, a função dentro do useEffect será executada sempre que for
	// detectada qualquer alteração em algum dos itens.
	const [anotherNumber, setAnotherNumber] = useState(0);

	useEffect(() => {
		//sempre que houver qualquer alteração dentro do anotherNumber, será executado o bloco de código abaixo

		console.log("AnotherNumber alterado!");
	}, [anotherNumber]);

	// 4 - Cleanup do useEffect
	// Realiza limpeza de algumas funcionalidades para evitar erros, vazamentos de memória e/ou comportamentos indesejados
	// Exemplo: o TimeOut do JS, pois se não for parado, pode continuar sendo executado mesmo após a alteração para outra página do app

	useEffect(() => {
		/*
    const timer = setTimeout(() => {
			console.log("Fazem 5 segundos que o anotherNumber foi alterado");

			setAnotherNumber(Math.floor(Math.random() * 100));
			// nesse caso, ele gera um looping, pois em 5 segundos
			// ele altera e detecta a alteração no anotherNumber

			// Além disso, ao alterar de página o React retorna um erro, pois não existe mais a propriedade setAnotherNumber

			// Isso tudo é evitado com o clear.
		}, 5000);

		return () => clearTimeout(timer); */
	}, [anotherNumber]);

	return (
		<div>
			<hr />
			<h2>UseEffect</h2>
			<p>Number {number}</p>

			<button onClick={changeSomething}>Adicionar valor</button>

			<p>Another Number {anotherNumber}</p>
			<button onClick={() => setAnotherNumber(Math.floor(Math.random() * 100))}>
				Alterar Valor
			</button>

			<hr />
		</div>
	);
};

export default HookUseEffect;
