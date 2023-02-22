import { useContext } from "react";

import { AppContext } from "../App";

const Context = () => {
	// pega os valores do contexto vindo do ../App
	const details = useContext(AppContext);

	return (
		<>
			{details && (
				<div>
					<h2>Linguagem: {details.language}</h2>
					<h3>Framework: {details.framework}</h3>
					<h2>Projetos: {details.projects}</h2>
				</div>
			)}
		</>
	);
};

export default Context;
