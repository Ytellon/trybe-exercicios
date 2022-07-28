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
    const result = await doMath(10, 20, 30);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

const teste2 = async () => {
  try {
    const result = await doMath(10, 20, 'a');
    console.log(result);
  } catch (error) {
    return console.log(error.message);
  }
}

const teste3 = async () => {
  try {
    const result = await doMath(10, 20, 1);
    console.log(result);
  } catch (error) {
    return console.log(error.message);
  }
}

teste1();
teste2();
teste3();