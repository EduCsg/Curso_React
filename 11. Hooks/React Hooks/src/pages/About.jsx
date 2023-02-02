import React from "react";

import { useContext } from "react";
import { someContext } from "../components/HookUseContext";

const About = () => {
	const { contextValue } = useContext(someContext);

	return (
		<div>
			<hr />

			<h2>useContext</h2>
			<p>Valor do context - {contextValue}</p>
		</div>
	);
};

export default About;
