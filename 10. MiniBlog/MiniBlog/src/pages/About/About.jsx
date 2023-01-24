import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className={styles.about}>
			<h2>
				Sobre o Mini<span>Blog</span>
			</h2>
			<p>
				Este projeto consiste em um blog, realizado com React no Front-End e
				Firebase no Back-End!
			</p>
			<Link to="/posts/create" className="btn">
				Crie seu post!
			</Link>
		</div>
	);
};

export default About;
