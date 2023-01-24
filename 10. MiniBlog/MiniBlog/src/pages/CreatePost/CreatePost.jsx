import styles from "./CreatePost.module.css";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [body, setBody] = useState("");
	const [tags, setTags] = useState([]);
	const [formError, setFormError] = useState("");

	const { user } = useAuthValue();

	const { insertDocument, response } = useInsertDocument("posts");

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

		insertDocument({
			title,
			image,
			body,
			tagsArray,
			uid: user.uid,
			createdBy: user.displayName,
		});

		//redirect to home page
		navigate("/");
	};

	return (
		<div className={styles.create_post}>
			<h2>Criar Post</h2>
			<p>Escreva sobre o que quiser e compartilhe com sua rede!</p>

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

				{!response.loading && <button className="btn">Criar post</button>}
				{response.loading && (
					<button className="btn" disabled>
						Aguarde...
					</button>
				)}

				{response.error && <p className="error">{response.error}</p>}
				{formError && <p className="error">{formError}</p>}
			</form>
		</div>
	);
};

export default CreatePost;
