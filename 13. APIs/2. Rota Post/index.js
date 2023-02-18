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

// define o método (post), a rota ("/createproduct") e a função executada nessa rota, com a requisição e a resposta
app.post("/createproduct", (req, res) => {
	/*
		Ao enviar o JSON no body, ele vai conseguir recuperar os dados

		JSON

		{
			"name": "produto",
			"price": "299"
		}
	*/

	const name = req.body.name;
	const price = req.body.price;

	res.json({
		message: `O produto ${name} foi criado com o valor de ${price} reais!`,
	});
});

app.listen(3000);
