import "./App.css";
import ShowCars from "./components/ShowCars";
import Title from "./components/Title";

function App() {
	const cars = [
		{ id: 1, brand: "Audi", color: "Branco" },
		{ id: 2, brand: "BMW", color: "Preto" },
		{ id: 3, brand: "Ferrari", color: "Azul" },
	];

	return (
		<div className="App">
			<div>
				<Title />
				<ShowCars cars={cars} />
			</div>
		</div>
	);
}

export default App;
