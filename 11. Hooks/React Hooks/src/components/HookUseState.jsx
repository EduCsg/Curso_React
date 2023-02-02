import React from "react";

import { useState } from "react";

const UseState = () => {
	// 1 - useState
	let userNameVar = "João";
	const [userNameState, setUserNameState] = useState("João");

	const changeName = () => {
		userNameVar = "Alterou";
		setUserNameState("Alterou");
	};

	// 2 - useState + Inputs
	const [age, setAge] = useState(18);

	const handleSubmit = (e) => {
		e.preventDefault();

		//envia dados a api
		console.log(age);
	};

	return (
		<div>
			{/* 1 - UseState */}
			<hr />

			<h2>UseState</h2>
			<h3>Variável: {userNameVar}</h3>
			<h3>useState: {userNameState}</h3>

			<button onClick={changeName}>Mudar nomes!</button>
			<p>(Olhe o console!)</p>

			<hr />

			{/* 2 - useState + Input */}
			<h2>UseState + Inputs (Value e onChange)</h2>
			<p>Digite a sua idade</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>

				<input type="submit" value="Enviar" />
			</form>

			<p>Você tem {age} anos!</p>
			<hr />
		</div>
	);
};

export default UseState;
