const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

const doMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
  
    const result = a + b * c;
  
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
};

const teste1 = async () => {
  try {
    const result = await doMath(num1, num2, num3);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

teste1();