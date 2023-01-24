import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
	collection, //define a colecao que vai usar p pegar o dado
	query, //solicitar o dado para a db
	orderBy, //orderna os dados
	onSnapshot, // monitora um documento e quando tem alteração, faz um reload (Realtime Updates)
	where, //filtrar resultados
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	// deal with memory leak
	const [cancelled, setCancelled] = useState(false);

	useEffect(() => {
		return () => {
			async function loadData() {
				if (cancelled) {
					return;
				}

				setLoading(true);

				const collectionRef = await collection(db, docCollection); //coleta a collection da db

				try {
					let q;

					//buscar

					if (search) {
						q = await query(
							collectionRef,
							where("tagsArray", "array-contains", search),
							orderBy("createdAt", "desc"),
						);

						console.log(q);
					} else if (uid) {
						q = await query(
							collectionRef,
							where("uid", "==", uid),
							orderBy("createdAt", "desc"),
						);
					} else {
						// faz uma query, ordenada pela data de criação decrescente
						q = await query(collectionRef, orderBy("createdAt", "desc"));
					}

					//dashboard

					// quando houver alteração no dado, o onSnapshot vai atualizar o get
					await onSnapshot(q, (querySnapshot) => {
						setDocuments(
							querySnapshot.docs.map((doc) => ({
								id: doc.id,
								...doc.data(),
							})),
						);
					});

					setLoading(false);
				} catch (error) {
					console.log(error);
					setError(error.message);

					setLoading(false);
				}
			}

			loadData();
		};
	}, [docCollection, search, uid, cancelled]);

	useEffect(() => {
		return () => setCancelled(true);
	}, []);

	return { documents, loading, error };
};
