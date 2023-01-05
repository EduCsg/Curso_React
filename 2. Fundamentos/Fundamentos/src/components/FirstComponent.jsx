import MyComponent from "./MyComponent";

const FirstComponent = () => {
	//comentário dentro da função

	/*
    Comentário MultiLine da função
  */

	return (
		<div>
			{/* Comentário dentro do JSX */}

			<h1>Meu primeiro componente</h1>
			<p className="texto">Meu texto</p>

			<MyComponent />
		</div>
	);
};

export default FirstComponent;
