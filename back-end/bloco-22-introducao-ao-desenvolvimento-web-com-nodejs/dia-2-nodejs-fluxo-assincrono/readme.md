### O que aprendi:

- Realizar operações assíncronas utilizando callbacks;

- Realizar operações assíncronas utilizando Promises;

- Ler e escrever arquivos localmente com Node.js;

- Escrever seus próprios scripts que criam e consomem Promises;

- Reescrever código que usa callbacks de modo que passe a usar Promises.

---

### Agora, a prática

> 

1. Crie uma função que receba três parâmetros e retorna uma `Promise`.
   
   1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `"Informe apenas números"`.
   2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro (`(a + b) * c`).
   3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo `"Valor muito baixo"`
   4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

2. Escreva um código para consumir a função construída no exercício anterior.
   
   - Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: `Math.floor(Math.random() * 100 + 1)`.
     - Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
     - Utilize `then` e `catch` para manipular a Promise retornada pela função:
       1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
       2. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

3. Reescreva o código do exercício anterior para que utilize `async/await`.
- Lembre-se: a palavra chave `await` só pode ser utilizada dentro de funções `async`.
4. 🚀 Realize o download [deste arquivo](https://assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json) e salve-o como `simpsons.json`. Utilize o arquivo baixado para realizar os requisitos abaixo.
- Você pode utilizar `then`/`catch` ou `async/await` para escrever seu código. Procure não utilizar callbacks.
  
  - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato `id - Nome`. Por exemplo: `1 - Homer Simpson`.
  - Crie uma função que receba o `id` de uma personagem como parâmetro e retorne uma `Promise` que é resolvida com os dados da personagem que possui o `id` informado. Caso não haja uma personagem com o `id` informado, rejeite a Promise com o motivo "id não encontrado".
  - Crie uma função que altere o arquivo `simpsons.json` retirando os personagens com `id` 10 e 6.
  - Crie uma função que leia o arquivo `simpsons.json` e crie um novo arquivo, chamado `simpsonFamily.json`, contendo as personagens com `id` de 1 a 4.
  - Crie uma função que adicione ao arquivo `simpsonFamily.json` o personagem `Nelson Muntz`.
  - Crie uma função que substitua o personagem `Nelson Muntz` pela personagem `Maggie Simpson` no arquivo `simpsonFamily.json`.
5. Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
   - Utilize o `Promise.all` para manipular vários arquivos ao mesmo tempo.
   - Dado o seguinte array de strings: `['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']` Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a `file<index + 1>.txt`. Por exemplo, para a string "Finalmente", o nome do arquivo é `file1.txt`.
   - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado `fileAll.txt`.

O conteúdo do arquivo `fileAll.txt` deverá ser `Finalmente estou usando Promise.all !!!`.

Para os exercícios abaixo, faremos uso de um módulo chamado `readline`, principalmente de seu método `readline.question()`. Ele provê uma interface de leitura de dados inserida no terminal. Para mais informações, consulte a [documentação](https://nodejs.org/api/readline.html).

6. Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
   
   - Pergunte à pessoa usuária qual arquivo ela deseja ler.
   - Leia o arquivo indicado.
   - Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
   - Caso o arquivo exista, escreva seu conteúdo na tela.

7. Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
   
   - Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
   - Leia o arquivo.
   - Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
   - Caso o arquivo exista, solicite a palavra a ser substituída.
   - Solicite a nova palavra, que substituirá a palavra anterior.
   - Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
   - Pergunte o nome do arquivo de destino.
   - Salve o novo arquivo no caminho de destino.

Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com `replace(new RegExp(palavra, 'g'), novaPalavra)`.

8. Escreva uma função que receba um número inteiro maior que 0 e retorne uma Promise.
   - Se o número for múltiplo de 3, resolva a Promise com o valor "Fizz".
   - Se o número for múltiplo de 5, resolva a Promise com o valor "Buzz".
   - Se o número for múltiplo de 3 e 5, resolva a Promise com o valor "FizzBuzz".
   - Caso contrário, rejeite a Promise com o valor do número.

---
