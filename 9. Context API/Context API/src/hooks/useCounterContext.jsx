import { CounterContext } from "../context/CounterContext";
import { useContext } from "react";

export const useCounterContext = () => {
	const context = useContext(CounterContext);

	if (!context) {
		console.log("Contexto não encontrado!");
	}

	return context;
};
