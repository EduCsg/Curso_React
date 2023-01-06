const CarDetails = ({ brand, km, color, isNew }) => {
	return (
		<div>
			<h2>Detalhes do carro:</h2>

			<ul>
				<li>Marca: {brand}</li>
				<li>KM: {km}</li>
				<li>Cor: {color}</li>
			</ul>
			{isNew && <h3>Esse carro é novo!</h3>}
		</div>
	);
};

export default CarDetails;
