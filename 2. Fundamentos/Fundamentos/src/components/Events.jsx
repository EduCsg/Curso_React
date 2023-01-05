const Events = () => {
	const handleMyEvent = (e) => {
		//por padrão, ao declarar o "e" (ou "event") como parâmetro da função,
		//ele retornará diversas informações relacionadas ao evento disparado, como
		//o target (button, no caso), a posição X e Y na tela, entre outros.

		console.log(e);
		console.log(e.target);

		console.log("Ativou o evento!");
	};

	const renderSomething = (x) => {
		if (x) {
			return <h2>Renderizando isso como True!</h2>;
		} else {
			return <h2>Também posso renderizar isso como False!</h2>;
		}
	};

	return (
		<div>
			<div>
				{/*
				
				Se chamarmos a função como handleMyEvent(), ela
				será disparada ao ler o código, não ao clicar no botão
				
				*/}

				<button onClick={handleMyEvent}>Clique aqui!</button>
			</div>

			<div>
				{/* É possível também colocar a lógica da função inline,
				porém ela pode complicar para entender o código se for muito extensa */}

				<button onClick={() => console.log("Clicou inline!")}>
					Função Inline!
				</button>

				<button
					onClick={() => {
						if (true) {
							console.log("Isso é errado!");
						}
					}}
				>
					Função em bloco Inline!
				</button>
			</div>
			{renderSomething(true)}
			{renderSomething(false)}
		</div>
	);
};

export default Events;
