// Ficheiro: calculadora.test.js

// Importa as funções que queremos testar
const { somar, subtrair, multiplicar, dividir } = require('./calculadora.js');

// Bloco de testes para a função 'somar'
describe('Testes da Calculadora - Função Somar', () => {
  test('Deve somar 2 + 2 e retornar 4', () => {
    // expect(resultado).toBe(esperado);
    expect(somar(2, 2)).toBe(4);
  });

  test('Deve somar 10 + (-5) e retornar 5', () => {
    expect(somar(10, -5)).toBe(5);
  });
});

// Bloco de testes para a função 'subtrair'
describe('Testes da Calculadora - Função Subtrair', () => {
  test('Deve subtrair 10 - 5 e retornar 5', () => {
    expect(subtrair(10, 5)).toBe(5);
  });
});

// Bloco de testes para a função 'multiplicar'
describe('Testes da Calculadora - Função Multiplicar', () => {
  test('Deve multiplicar 3 * 3 e retornar 9', () => {
    // Este teste vai falhar por causa do nosso bug!
    expect(multiplicar(3, 3)).toBe(9);
  });
});

// Bloco de testes para a função 'dividir'
describe('Testes da Calculadora - Função Dividir', () => {
  test('Deve dividir 10 / 2 e retornar 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('Deve lançar um erro ao dividir por zero', () => {
    // Testamos se a função lança um erro específico
    expect(() => {
      dividir(10, 0);
    }).toThrow("Divisão por zero não é permitida.");
  });
});