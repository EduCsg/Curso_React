import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
	// 6 - Controlled Inputs

	// 3 - Gerenciamento de Dados
	const [name, setName] = useState(user ? user.name : "");
	const [email, setEmail] = useState(user ? user.email : "");

	const [bio, setBio] = useState(user ? user.bio : "");

	const [role, setRole] = useState(user ? user.role : "");

	const handleName = (e) => {
		// console.log(e.target.value);

		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // Desativa o reloading da página quando enviado o form

		console.log("Formulário Enviado!");
		console.log(name, email, bio, role);

		//7 - Limpar form

		setName("");
		setEmail("");
		setBio("");
		setRole("");
	};

	return (
		<div>
			{/* 5 - Envio do Form */}
			{/* 1 - Criação do Form */}

			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome</label>

					{/* 3 - Manipulação de State */}
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Insira seu Nome"
						onChange={handleName}
						value={name}
					/>
				</div>

				{/* 2 - Label envolvendo input */}

				<label>
					<span>E-mail</span>

					{/* 4 - Manipulação de State Inline */}
					<input
						type="email"
						name="email"
						placeholder="Insira seu E-mail"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>

				{/* 8 - TextArea */}
				<label>
					<span>Biografia</span>
					<textarea
						name="bio"
						placeholder="Descrição do Usuário"
						onChange={(e) => setBio(e.target.value)}
						value={bio}
					></textarea>
				</label>

				{/* 9 - Select */}

				<label>
					<span>Função no Sistema</span>
					<select
						name="role"
						onChange={(e) => setRole(e.target.value)}
						value={role}
					>
						<option value="user">Usuário</option>
						<option value="editor">Editor</option>
						<option value="admin">Administrador</option>
					</select>
				</label>

				<input className="submitBtn" type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default MyForm;
