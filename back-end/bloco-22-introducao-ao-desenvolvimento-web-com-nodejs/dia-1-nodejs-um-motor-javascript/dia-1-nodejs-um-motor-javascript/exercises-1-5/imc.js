const readline = require('readline-sync');

// const peso = 80;
// const altura = 1.80;

const peso = readline.questionFloat('Qual o seu peso? (Kg) ');
const altura = readline.questionFloat('Qual a sua altura? (m) ');

const calculaIMC = (peso, altura) => {
  const imc = peso / (altura ** 2);
  switch (true) {
    case imc < 18.5:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`);
    case imc >= 18.5 && imc < 24.9:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está no peso ideal.`);
    case imc >= 25 && imc < 29.9:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está acima do peso.`);
    case imc >= 30 && imc < 34.9:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau I.`);
    case imc >= 35 && imc < 39.9:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau II.`);
    case imc >= 40:
      return console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau III.`);
    default:
      return console.log('Erro');
  }
};

calculaIMC(peso, altura);