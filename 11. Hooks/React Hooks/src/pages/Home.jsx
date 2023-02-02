import React from "react";

import HookUseState from "../components/HookUseState";
import HooksUseReducer from "../components/HooksUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";
import HookUseCallback from "../components/HookUseCallback";
import HookUseMemo from "../components/HookUseMemo";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookCustom from "../components/HookCustom";

// useContext

import { useContext } from "react";
import { someContext } from "../components/HookUseContext";

const Home = () => {
	const { contextValue } = useContext(someContext);

	return (
		<div>
			<HookUseState />
			<HooksUseReducer />
			<HookUseEffect />

			<h2>useContext</h2>
			<p>Valor do context - {contextValue}</p>

			<HookUseRef />
			<HookUseCallback />
			<HookUseMemo />
			<HookUseLayoutEffect />
			<HookUseImperativeHandle />
			<HookCustom />
		</div>
	);
};

export default Home;
