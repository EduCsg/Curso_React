import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
	// 1 - useRef
	const numberRef = useRef(0);
	const [counter, setCounter] = useState(0);
	const [counterB, setCounterB] = useState(0);

	useEffect(() => {
		//nesse caso, o useEffect será executado sempre que houver alteração no componente
		//se utilizado um useState aqui, entraria em um looping infinito ´por causa da re-renderização

		numberRef.current = numberRef.current + 1;
	});

	//
	// 2 - useRef + DOM

	const inputRef = useRef();
	const [refText, setRefText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log(inputRef.current.value);

		// zera o valor do input
		setRefText("");

		// foca novamente no input após enviar o form
		inputRef.current.focus();
	};

	return (
		<div>
			<hr />
			<h2>useRef</h2>

			{/* useRef */}
			<p>O componente renderizou {numberRef.current} vezes</p>
			<p>Counter 1 - {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Contador A</button>

			<p>Counter 2 - {counterB}</p>
			<button onClick={() => setCounterB(counterB + 1)}>Contador A</button>

			{/* useRef + DOM */}

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					ref={inputRef}
					value={refText}
					onChange={(e) => setRefText(e.target.value)}
				/>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default HookUseRef;
