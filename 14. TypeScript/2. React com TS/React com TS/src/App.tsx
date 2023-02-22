// 4 - Importação de components
import { createContext } from "react";
import Context from "./components/Context";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

// 9 - Type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - ContextAPI
interface IAppContext {
	language: string;
	framework: string;
	projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
	// 1 - Variáveis
	const name: string = "Eduardo";
	const age: number = 18;
	const isWorking: boolean = true;

	// 2 - Funções

	// o parâmetro precisa ser do tipo string e o retorno também será em string
	const userGreeting = (name: string): string => {
		return `Olá, ${name}!`;
	};

	// 9 - Type
	const myText: textOrNull = "Algum texto aqui!";
	let mySecondText: textOrNull = null;

	const testandoFixedAquilo: fixed = "Aquilo"; // |> aceito!
	// const testandoFixedOutro: fixed = "teste"; // |> erro!

	// 10 - ContextAPI
	const contextValue: IAppContext = {
		language: "Javascript",
		framework: "React",
		projects: 5,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<div className="App">
				<h1>TypeScript com React!</h1>
				<h2>Nome: {name}</h2>
				<h2>Idade: {age}</h2>
				{isWorking && (
					<div>
						<p>Está funcionando!</p>
					</div>
				)}
				<hr />
				{/* Funciona normalmente! */}
				<h3>{userGreeting(name)}</h3>
				<hr />
				{/* Funciona, porém retorna um erro na IDE, devido ao tipo de "age" ser number */}
				{/* <h3>{userGreeting(age)}</h3> */}
				<FirstComponent />
				<hr />
				{/* 5 - Desestruturando Props */}
				<SecondComponent name="Segundo!" />
				<hr />
				<Destructuring
					title="Primeiro Post"
					content="Conteúdo"
					commentsQty={10}
					tags={["Typescript", "React", "Javascript"]}
					// 8 - Enum
					category={Category.TS}
				/>
				<hr />
				<Destructuring
					title="Segundo Post"
					content="Conteúdo do segundo post"
					commentsQty={5}
					tags={["Python", "HTML"]}
					// 8 - Enum
					category={Category.P}
				/>
				<hr />
				{/* 6 - useState com TS */}
				<State />
				<hr />
				{/* 9 - Type */}
				{myText && <p>Tem texto na variável!</p>} {/* String */}
				{mySecondText && <p>Não tem texto!</p>} {/* Null */}
				<hr />
				{/* 11 - Usando ContextAPI */}
				<Context />
			</div>
		</AppContext.Provider>
	);
}

export default App;
