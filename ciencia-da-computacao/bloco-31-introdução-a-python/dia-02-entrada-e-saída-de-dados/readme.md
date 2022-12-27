### O que aprendi:

- Preparar um ambiente de projeto em Python, definindo sua estrutura de diretórios e criando ambientes isolados;

- Instalar bibliotecas de terceiros num projeto Python;

- Entender como lidar com exceções em Python;

- Receber dados de pessoas usuárias, assim como enviá-los de volta;

- Ler e escrever arquivos no formato tabular `CSV`;

- Serializar e desserializar dados no formato `JSON`.

---

**Exercício 1:** Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida. Exemplo:

*Entrada:*



```bash
1PEDRO
```

*Saída:*



```bash
1PEDRO
2PEDR
3PED
4PE
5P
```

**Exercício 2:** *Jogo da palavra embaralhada.* Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

🦜 Para embaralhar uma palavra faça: `scrambled_word = "".join(random.sample(word, len(word)))`

🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: `random.choice(["word1", "word2", "word3"]) -> "word2"`.

**Exercício 3:** Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

🚀 **Exercício 4:** Dado o seguinte [arquivo](https://lms-assets.betrybe.com/lms/books.json) no formato **JSON**, leia seu conteúdo e calcule a porcentagem de livros em cada categoria em relação ao número total de livros. O resultado deve ser escrito em um arquivo no formato **CSV** como o exemplo abaixo.

*Saída:*



```bash
1categoria,porcentagem
2Python,0.23201856148491878
3Java,0.23201856148491878
4PHP,0.23201856148491878
```
