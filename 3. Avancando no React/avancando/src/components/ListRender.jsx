import { useState } from "react";

const ListRender = () => {
	const [List] = useState(["Matheus", "Pedro", "José"]);

	//exemplificando banco de dados
	const [users, setUsers] = useState([
		{ id: 1, name: "Matheus", age: 31 },
		{ id: 2, name: "Jodo", age: 28 },
		{ id: 3, name: "Pedro", age: 44 },
	]);

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4);

		setUsers((prevUsers) => {
			return prevUsers.filter((user) => randomNumber !== user.id);
		});
	};

	return (
		<div>
			<ul>
				{List.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>

			{/* Exemplo de Key com Banco de dados */}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.age}
					</li>
				))}
			</ul>

			<button onClick={deleteRandom}>Delete random user</button>
		</div>
	);
};

export default ListRender;
