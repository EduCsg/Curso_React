const TemplateExpressions = () => {
	const name = "Eduardo";
	const data = {
		age: 18,
		job: "Programador",
	};

	return (
		<div>
			<h2>Olá, meu nome é {name}, tudo bem?</h2>
			<p>
				Tenho {data.age} anos e sonho em atuar como {data.job}!
			</p>
			<p>A soma de 4 + 4 é {4 + 4}</p>
			<p>{console.log("JSX Javascript!")}</p>
		</div>
	);
};

export default TemplateExpressions;
