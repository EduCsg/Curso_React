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

/* STATUS HTTP

Respostas de informação (100-199)
Respostas de sucesso (200-299)
Redirecionamentos (300-399)
Erros do cliente (400-499)
Erros do servidor (500-599)
*/

app.post("/createproduct", (req, res) => {
	const name = req.body.name;
	const price = req.body.price;

	if (!name || !price) {
		res.status(422).json({ message: "Preencha todos os campos!" });
	}

	// o status é enviado junto ao json
	res.status(201).json({
		message: `O produto ${name} foi criado com o valor de ${price} reais!`,
	});
});

app.get("/", (req, res) => {
	// o status é enviado junto ao json
	res.status(200).json({ message: "Primeira rota criada!" });
});

app.listen(3000);
