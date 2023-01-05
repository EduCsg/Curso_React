const Challenge = () => {
	const n1 = parseInt(Math.random() * 100);
	const n2 = parseInt(Math.random() * 100);

	return (
		<div>
			<div>
				<h2>N1 = {n1}</h2>
				<h2>N2 = {n2}</h2>
			</div>
			<button onClick={() => console.log(n1 + n2)}>Somar</button>
		</div>
	);
};

export default Challenge;
