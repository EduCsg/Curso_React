import "./App.css";
import Challenge from "./components/Challenge";
import Events from "./components/Events";

import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpressions from "./components/TemplateExpression";

/*

	Conceitos Estudados

	Criação de componentes
	Exportação e Importação de componentes
	Aprofundando no JSX
	Comentários durante o código (HTML/JS)
	Interpolações e variáveis no JSX (Template Expressions)
	Hierarquia de componentes
	Eventos	(onClick), junto com funções externas e funções inline
	Return de HTML através de funções

*/

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<FirstComponent />
			<TemplateExpressions />
			<MyComponent />
			<Events />
			<Challenge />
		</div>
	);
}

export default App;
