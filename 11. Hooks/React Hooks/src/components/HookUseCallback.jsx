import { useCallback, useState } from "react";

import List from "./List";

const HookUseCallback = () => {
	const [counter, setCounter] = useState(0);

	// simula a requisicao de um bd
	/*
	  dessa maneira, vai ser re-renderizada sempre que apertado no botao:
    
    const getItemsFromDb = () => {
      return ["a", "b", "c"];
    };
  */

	// maneira correta, com useCallback:
	const getItemsFromDb = useCallback(() => {
		return ["a", "b", "c"];
	}, []);

	return (
		<div>
			<hr />
			<h2>useCallback</h2>

			<List getItems={getItemsFromDb} />

			<button onClick={() => setCounter(counter + 1)}>Alterar</button>
			<p>Counter {counter}</p>
		</div>
	);
};

export default HookUseCallback;
