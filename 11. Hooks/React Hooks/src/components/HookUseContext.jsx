import { createContext } from "react";

export const someContext = createContext();

export const HookUseContext = ({ children }) => {
	const contextValue = "Testing Context";

	return (
		<someContext.Provider value={{ contextValue }}>
			{children}
		</someContext.Provider>
	);
};
