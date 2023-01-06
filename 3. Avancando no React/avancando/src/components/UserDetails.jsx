const UserDetails = ({ name, age, job }) => {
	return (
		<div>
			<ul>
				<li>Nome: {name}</li>
				<li>Idade: {age}</li>
				<li>Profissão: {job}</li>
			</ul>

			{age >= 18 ? (
				<p>+18, Pode tirar carta!</p>
			) : (
				<p>-18, Não pode tirar carta!</p>
			)}
		</div>
	);
};

export default UserDetails;
