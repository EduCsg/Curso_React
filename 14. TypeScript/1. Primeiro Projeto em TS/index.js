var firstName = "Eduardo";
var age = 18;
var x = true;
// Dessa maneira, será compilado com qualquer tipo de variável
function greetingAll(name) {
    console.log("Ol\u00E1, ".concat(name, "!"));
}
greetingAll(firstName); // Olá, Eduardo!
greetingAll(age); // Olá, 18!
greetingAll(x); // Olá, true!
// Já com o TS, podemos especificar os tipos para serem aceitos da seguinte maneira
function greetingString(name) {
    console.log("Pt2, ".concat(name, "!"));
}
greetingString(firstName); // Olá, Eduardo!
greetingString(age); // Erro
greetingString(x); // Erro
