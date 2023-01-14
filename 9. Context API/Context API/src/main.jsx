import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";
import { TitleColorContextProvider } from "./context/TitleColorContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* 2 - Criando Provider */}
		<CounterContextProvider>
			<TitleColorContextProvider>
				<App />
			</TitleColorContextProvider>
		</CounterContextProvider>
	</React.StrictMode>,
);
