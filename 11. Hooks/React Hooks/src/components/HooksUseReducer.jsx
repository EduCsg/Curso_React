import { useState, useReducer } from "react";

const HooksUseReducer = () => {
	// 1 - Começando com o useReducer
	const [number, dispatch] = useReducer((state, action) => {
		// A diferença do userReducer para o useState, é que o reducer consegue
		// executar uma lógica antes de alterar o valor dentro do state

		return Math.random(state);
	});

	// 2 - Avançando no useReducer
	const initialTasks = [
		{ id: 1, text: "Fazer alguma coisa" },
		{ id: 2, text: "Fazer outra coisa" },
	];
	const [taskText, setTaskText] = useState("");

	/*
	EXPLICANDO A LÓGICA TODA

	O submit chamará a função { handleSubmit } que, por sua vez, passará o { dispatchTasks } com o atributo ({ type: "ADD" }).

	O dispatch é como se fosse o setValue do setState, ou seja, ele 	altera o valor armazenado.
	Porém, no caso do useReducer, ele vai executar uma função que alterará o valor posteriormente.


	DECLARAÇÃO: const [val, dispatchVal] = useReducer(funcao, valorInicial);
	NESSE CASO: const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

	Nesse caso, ao chamar o dispatchTasks, rodará a função do taskReducer que foi passada logo adiante.
	Nessa sim haverá um Switch com os cases, podendo ser alterado dependendo do atributo passado no {type: "TYPE"} ao chamar o Dispatch.

	O case deve, por padrão, retornar qual será o novo valor atribuído ao state anterior. Seja ele com os Spread Operators em casos de array ou não.	*/

	const taskReducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				const newTask = {
					id: Math.random(),
					text: taskText,
				};

				setTaskText("");
				return [...state, newTask];

			case "DELETE":
				return state.filter((task) => task.id !== action.id);

			default:
				//nao faz nada, apenas retorna o state
				return state;
		}
	};

	/* 
	declração do useReducer 
	
	const [val, dispatchVal] = useReducer(funcao, valorInicial);
	
	val -> Valor armazenado (igual useState)
	dispatch -> Comunicação entre o HTML e o valor armazenado, age como o setValue no useState
	useReducer(function, initialValue) -> Declaração comum
	funcao -> Vai ser o código executado ao alterar o valor armazenado
	valorInicial -> Valor inicial armazenado no "val"		*/

	const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatchTasks({ type: "ADD" });
	};

	const removeTask = (id) => {
		dispatchTasks({ type: "DELETE", id: id });
	};

	return (
		<div>
			<h2>UseReducer</h2>

			<p>Número: {number}</p>

			<button onClick={dispatch}>Alterar Número</button>

			<hr />

			<h2>UseReducer + Actions</h2>

			<h3>Tarefas</h3>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setTaskText(e.target.value)}
					value={taskText}
				/>

				<input type="submit" value="Enviar" />
			</form>

			{tasks.map((task) => (
				<li key={task.id} onDoubleClick={() => removeTask(task.id)}>
					{task.text}
				</li>
			))}
		</div>
	);
};

export default HooksUseReducer;
