// Ficheiro: calculadora.js

/**
 * Adiciona dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 */
function somar(a, b) {
  return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - O primeiro número.
 * @param {number} b - O número a ser subtraído.
 * @returns {number} A diferença entre a e b.
 */
function subtrair(a, b) {
  return a - b;
}

/**
 * Multiplica dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} O produto de a e b.
 */

// ...
function multiplicar(a, b) {
  return a * b; // CORRIGIDO! (antes era a + b)
}
// ...
/**
 * Divide o primeiro número pelo segundo.
 * Lança um erro se a divisão for por zero.
 * @param {number} a - O dividendo.
 * @param {number} b - O divisor.
 * @returns {number} O quociente de a e b.
 */
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
}

// Precisamos exportar as funções para que os testes possam usá-las.
module.exports = { somar, subtrair, multiplicar, dividir };