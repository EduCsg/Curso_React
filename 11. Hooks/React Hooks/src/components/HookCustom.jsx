import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
	const [number, setNumber] = useState(0);

	const previousValue = usePrevious(number);

	return (
		<div>
			<hr />
			<h2>Custom Hook</h2>
			<p>Atual: {number}</p>
			<p>Anterior: {previousValue}</p>

			<button onClick={() => setNumber((Math.random() * 100).toFixed(2))}>
				Alterar
			</button>
		</div>
	);
};

export default HookCustom;
