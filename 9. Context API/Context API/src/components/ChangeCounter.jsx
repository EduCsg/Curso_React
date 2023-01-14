import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 3 - Alterando valor do context

const ChangeCounter = () => {
	const { counter, setCounter } = useContext(CounterContext);

	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>
				Add value to Counter
			</button>
		</div>
	);
};

export default ChangeCounter;
