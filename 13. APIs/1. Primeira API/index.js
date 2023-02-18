const express = require("express");

// inicia o express
const app = express();

//configurações do express
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(express.json());

// rotas (endpoints)

// define o método (get), a rota ("/") e a função executada nessa rota, com a requisição e a resposta
app.get("/", (req, res) => {
	// envia a resposta em JSON
	res.json({ message: "Primeira rota criada!" });
});

app.listen(3000);
