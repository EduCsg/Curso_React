import ChangeCounter from "../components/ChangeCounter";
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - Refatorando com Hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais Complexo
import { useTitleColorContext } from "../hooks/useTItleColorContext";

const Home = () => {
	// const { counter } = useContext(CounterContext);

	// 4 - Refatorando com hook
	const { counter } = useCounterContext();

	// 5 - Contexto mais Complexo
	const { color, dispatch } = useTitleColorContext();

	// 6 - Alterando contexto mais complexo
	const setTitleColor = (color) => {
		dispatch({ type: color });
	};

	return (
		<div>
			<h1 style={{ color: color }}>Home</h1>
			<h2>{counter}</h2>

			{/* 3 - Alterando valor do context */}
			<ChangeCounter />

			{/* 6 - Alterando contexto mais complexo */}
			<div>
				<button onClick={() => setTitleColor("RED")}>Vermelho</button>
				<button onClick={() => setTitleColor("BLUE")}>Azul</button>
			</div>
		</div>
	);
};

export default Home;
