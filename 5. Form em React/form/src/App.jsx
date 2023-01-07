import "./App.css";
import MyForm from "./components/MyForm";

/*

	Conceitos Estudados

	Criação de Forms
  Maneiras de linkar Inputs e Labels
  Gerenciar dados do Input
	Evento onChange
	Alteração do State Inline
	Evento onSubmit
	Evento preventDefault
	Controlled Inputs
	Limpar formulários
	TextArea
	Input de Select

*/

function App() {
	return (
		<div className="App">
			<h2>Forms</h2>
			<MyForm
				user={{
					name: "Josias",
					email: "Josias@gmail.com",
					bio: "Eu sou advogado!",
					role: "admin",
				}}
			/>
		</div>
	);
}

export default App;
