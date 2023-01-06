import { useState } from "react";
import "./App.css";
import MyComponent from "./components/myComponent";
import Title from "./components/Title";

/*
	Conceitos Estudados

	CSS Global
  CSS em Componentes
  CSS Inline
  CSS Inline Dinâmico (if/else)
  Classes Dinâmicas
  CSS Modules

*/

function App() {
	const n = 15;

	const [nome] = useState("Du");

	const redTitleT = true;
	const redTitleF = false;

	return (
		<div className="App">
			{/* CSS Global */}
			<h1>CSS com React</h1>

			{/* CSS de Componente */}
			<MyComponent />

			<p>Este parágrafo é do App.JSX</p>

			{/* Inline CSS */}
			<p
				style={{
					color: "blue",
					backgroundColor: "orange",
					borderTop: "2px solid red",
					borderBottom: "2px solid blue",
				}}
			>
				Este elemento foi estilizado com Inline
			</p>

			{/* CSS Inline Dinâmico */}
			<h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
				CSS Dinâmico
			</h2>
			<h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
				CSS Dinâmico
			</h2>

			<p
				style={
					nome == "Du" ? { color: "magenta", backgroundColor: "#000" } : null
				}
			>
				Teste de nome
			</p>

			{/* Classe Dinâmica */}
			<h2 className={redTitleT ? "red-title" : "title"}>
				Este título vai ter classe dinâmica (true)
			</h2>

			<h2 className={redTitleF ? "red-title" : "title"}>
				Este título vai ter classe dinâmica (false)
			</h2>

			{/* CSS Modules */}
			<Title />
			<h2 className="my_title">meu titulo 2</h2>
		</div>
	);
}

export default App;
