import "./App.css";

import { useState } from "react";

import City from "./assets/city.jpg";
import CarDetails from "./components/carDetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import FragmentExample from "./components/FragmentExample";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import Message from "./components/Message";
import ShowUsername from "./components/ShowUsername";
import ChangeMessage from "./components/ChangeMessage";
import UserDetails from "./components/userDetails";

/*

	Conceitos Estudados

	Imagens (Public e Assets)
  Hooks (useState)
  Renderização de Listas (map)
  Propriedade Key
  Previous State
	Renderização Condicional
	If/Else no JSX
	Props e Destructuring Props
	Reaproveitação de componentes através das props
	Renderizando objetos juntamente com componentes usando Map()
	Fragment
	Container/Children
	Funções em Props
	State Lift

*/

function App() {
	const nome = "Du";

	function showMessage() {
		console.log("Evento do componente Pai!");
	}

	const [message, setMessage] = useState("");

	const handleMessage = (msg) => {
		setMessage(msg);
	};

	const cars = [
		{ id: 1, brand: "Ferrari", km: 0, color: "Amarela", isNew: true },
		{ id: 2, brand: "Bugatti", km: 20000, color: "Branco", isNew: true },
		{ id: 3, brand: "Mercedes", km: 2000, color: "Branco", isNew: false },
	];

	const users = [
		{ id: 1, name: "Eduardo", age: 18, job: "Estudante" },
		{ id: 2, name: "Carolina", age: 22, job: "Manager" },
		{ id: 3, name: "Douglas", age: 16, job: "Fisiculturista" },
	];

	return (
		<div className="App">
			<h1>Avançando em React!</h1>

			{/*
      
      Vindo do Public, é aceito colocar apenas / antes do nome
      
      Para importar dos Assets, é necessário dar o import no início
      do código e chamar dentro do JSX pelas chaves {}
      
      */}

			{/* Imagem vindo do Public */}
			<div>
				<img src="/img1.jpg" alt="Paisagem" />
			</div>

			{/* Imagem vindo dos Assets */}
			<div>
				<img src={City} alt="Cidade" />
			</div>

			<ManageData />

			<ListRender />

			<ConditionalRender />

			{/* Props */}
			<ShowUsername name={nome} />

			<div className="Cars">
				{/* Destructuring props */}
				<CarDetails brand="Audi" km={80000} color="Azul" isNew={true} />

				{/* Reaproveitando o componente */}
				<CarDetails brand="Volvo" km={20000} color="Verde" isNew={false} />
				<CarDetails brand="BMW" km={45000} color="Branco" isNew={true} />
			</div>

			{/* Loop em Array de objetos */}
			<h3>Loop em objetos!</h3>

			<div className="Cars">
				{cars.map((car) => (
					<CarDetails
						key={car.id}
						brand={car.brand}
						km={car.brand}
						color={car.color}
						isNew={car.isNew}
					/>
				))}
			</div>

			<FragmentExample FragmentProp="Prop do Fragment" />

			{/* Childrens HTML no App.JSX */}
			<Container myValue="Testing">
				<p>Texto de teste</p>
			</Container>

			<Container myValue="Testing 2">
				<p>Contaúdo como Children!</p>
			</Container>

			{/* Função no Prop */}
			<ExecuteFunction myFunction={showMessage} />

			{/* State Lift */}
			<Message msgContent={message} />
			<ChangeMessage handleMessage={handleMessage} />

			{/* DESAFIO */}
			<div className="Cars">
				{users.map((user) => (
					<UserDetails
						key={user.id}
						name={user.nome}
						age={user.age}
						job={user.job}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
