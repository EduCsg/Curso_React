import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
import { CounterContext } from "../context/CounterContext";

const Contact = () => {
	const { counter } = useContext(CounterContext);

	return (
		<div>
			<h1>Contact</h1>
			<h2>{counter}</h2>

			{/* 3 - Alterando valor do context */}
			<ChangeCounter />
		</div>
	);
};

export default Contact;
