{
	/* 5 - Desestruturando Props */
}

type Props = {
	title: string;
	content: string;
	commentsQty: number;
	tags: string[];

	// 8 - Enum
	category: Category;
};

// 8 - Enum
export enum Category {
	JS = "JavaScript",
	TS = "TypeScript",
	P = "Python",
}

const Destructuring = ({
	title,
	content,
	commentsQty,
	tags,
	category,
}: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			<h2>{content}</h2>
			<h2>{commentsQty}</h2>
			<h2>
				{tags.map((tag) => (
					<span>#{tag} </span>
				))}
			</h2>

			<h4>Categoria: {category}</h4>
		</div>
	);
};

export default Destructuring;
