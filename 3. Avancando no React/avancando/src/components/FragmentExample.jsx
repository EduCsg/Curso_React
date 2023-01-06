import React from "react";

const FragmentExample = ({ FragmentProp }) => {
	return (
		//serve para que não tenha apenas um elemento pai
		//pois isso talvez possa quebrar o layout
		<>
			<h2>Primeiro Título</h2>
			<h3>Segundo Título</h3>
			<h4>{FragmentProp}</h4>
		</>
	);
};

export default FragmentExample;
