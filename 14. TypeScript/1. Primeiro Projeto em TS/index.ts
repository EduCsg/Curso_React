const firstName = "Eduardo";
const age = 18;
const x = true;

// Dessa maneira, será compilado com qualquer tipo de variável
function greetingAll(name) {
	console.log(`Olá, ${name}!`);
}

greetingAll(firstName); // Olá, Eduardo!
greetingAll(age); // Olá, 18!
greetingAll(x); // Olá, true!

// Já com o TS, podemos especificar os tipos para serem aceitos da seguinte maneira
function greetingString(name: string) {
	console.log(`Pt2, ${name}!`);
}

greetingString(firstName); // Olá, Eduardo!
// greetingString(age); // Erro
// greetingString(x); // Erro

// Para compilar o TS para JS, usar o terminal "tsc index.ts"
