import styles from "./EditPost.module.css";

import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
	const { id } = useParams();
	const { document: post } = useFetchDocument("posts", id);

	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState("");

	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setBody(post.body);
			setImage(post.image);
			const textTags = post.tagsArray.join(", ");
			setTags(textTags);
		}
	}, [post]);

	const { user } = useAuthValue();

	const { updateDocument, response } = useUpdateDocument("posts");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		setFormError("");

		//validate image URL

		try {
			new URL(image);
		} catch (error) {
			setFormError("A imagem precisa ser uma URL!");
		}

		//create the tags array

		const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

		console.log(tagsArray);

		//check if all the values are ok
		if (!title || !image || !body || !tags) {
			setFormError("Preencha todos os campos antes de postar!");
		}

		if (formError) return;

		const data = {
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName,
		};

		updateDocument(id, data);

		//redirect to dashboard page
		navigate("/dashboard");
	};

	return (
		<div className={styles.edit_post}>
			{post && (
				<>
					<h2>Editando post '{post.title}'</h2>
					<p>Altere os dados do post!</p>
					<form onSubmit={handleSubmit}>
						<label>
							<span>Título</span>
							<input
								type="text"
								name="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Pense em um título para seu post"
								required
							/>
						</label>

						<label>
							<span>URL da imagem</span>
							<input
								type="text"
								name="image"
								onChange={(e) => setImage(e.target.value)}
								value={image}
								placeholder="Insira a URL da imagem desejada"
								required
							/>
						</label>
						<p className={styles.preview_title}>Preview da imagem:</p>
						<img
							src={post.image}
							alt={post.title}
							className={styles.preview_image}
						/>

						<label>
							<span>Conteúdo</span>
							<textarea
								name="body"
								required
								placeholder="Insira o conteúdo do post!"
								onChange={(e) => setBody(e.target.value)}
								value={body}
							></textarea>
						</label>

						<label>
							<span>Tags</span>
							<input
								type="text"
								name="tags"
								value={tags}
								onChange={(e) => setTags(e.target.value)}
								placeholder="Insira as tags (separadas por vírgula!)"
								required
							/>
						</label>

						{!response.loading && <button className="btn">Salvar</button>}
						{response.loading && (
							<button className="btn" disabled>
								Aguarde...
							</button>
						)}

						{response.error && <p className="error">{response.error}</p>}
						{formError && <p className="error">{formError}</p>}
					</form>
				</>
			)}
		</div>
	);
};

export default EditPost;
