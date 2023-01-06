import styles from "./ShowCars.module.css";

const ShowCars = ({ cars }) => {
	return (
		<div className={styles.carros}>
			{cars.map((car) => (
				<ul>
					<li>Marca: {car.brand}</li>
					<li>Cor: {car.color}</li>
				</ul>
			))}
		</div>
	);
};

export default ShowCars;
