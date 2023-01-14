// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTItleColorContext";

const About = () => {
	// const { counter } = useContext(CounterContext);

	// 4 - Refatorando com Hook
	const { counter } = useCounterContext();

	// 5 - Context mais complexo
	const { color } = useTitleColorContext();

	return (
		<div>
			<h1 style={{ color: color }}>About</h1>
			<h2>{counter}</h2>
		</div>
	);
};

export default About;
