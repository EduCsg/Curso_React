import { useState } from "react";

const ManageData = () => {
	let someData = 10;

	//Usando Hooks do useState
	const [Number, setNumber] = useState(10);

	return (
		<div>
			<div>
				{/* Não altera o valor da varíavel */}

				<p>{someData}</p>
				<button onClick={() => (someData = 15)}>Mudar Variável</button>
			</div>

			<div>
				<p>{Number}</p>
				<button onClick={() => setNumber(Number + 2)}>Mudar Variável</button>
			</div>
		</div>
	);
};

export default ManageData;
