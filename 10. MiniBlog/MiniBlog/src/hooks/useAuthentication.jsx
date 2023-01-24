import { db } from "../firebase/config";

import { useState, useEffect } from "react";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	signOut,
} from "firebase/auth";

export const useAuthentication = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	//cleanup
	//deal with memory leak
	const [cancelled, setCancelled] = useState(false);

	const auth = getAuth();

	function checkIfIsCancelled() {
		if (cancelled) {
			return;
		}
	}

	//register
	const createUser = async (data) => {
		checkIfIsCancelled();

		setLoading(true);
		setError("");

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			);

			await updateProfile(user, { displayName: data.displayName });

			setLoading(false);
			return user;
		} catch (error) {
			let systemErrorMessage;

			if (error.message.includes("Password")) {
				systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
			} else if (error.message.includes("email-already")) {
				systemErrorMessage = "E-mail já cadastrado";
			} else {
				systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!";
			}

			setError(systemErrorMessage);
			setLoading(false);

			console.log(error.message);
			console.log(typeof error.message);
		}
	};

	//sign-out
	const logout = () => {
		checkIfIsCancelled();

		signOut(auth);
	};

	//sign-in
	const login = async (data) => {
		checkIfIsCancelled();

		setLoading(true);
		setError("");

		try {
			await signInWithEmailAndPassword(auth, data.email, data.password);

			setLoading(false);
			return user;
		} catch (error) {
			let systemErrorMessage;

			if (error.message.includes("user-not-found")) {
				systemErrorMessage = "Usuário não encontrado!";
			} else if (error.message.includes("password")) {
				systemErrorMessage = "E-mail e/ou senha incorretos!";
			} else {
				systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde!";
			}

			setError(systemErrorMessage);
			setLoading(false);

			console.log(error.message);
			console.log(typeof error.message);
		}
	};

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return { auth, createUser, logout, login, error, loading };
};
