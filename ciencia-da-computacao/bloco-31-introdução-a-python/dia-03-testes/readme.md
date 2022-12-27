### O que aprendi:

- Escrever testes automatizados utilizando a linguagem **Python**;

- Verificar a ocorrência de erros esperados utilizando testes automatizados;

- Criar contextos para execução de testes automatizados;

- Modificar componentes do *software* para evitar a utilização de recursos externos.

---

🚀 **Exercício 1:** Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes **exceções**:

- Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;

- Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;

- Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz” ao invés do número.

Exemplo: `3 -> [1, 2, "Fizz"]`.

**Exercício 2:** Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase, e os dígitos 1 e 0 não estão associados a nenhuma letra.

Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

Copiar

```bash
1Letras  ->  Número
2ABC     ->  2
3DEF     ->  3
4GHI     ->  4
5JKL     ->  5
6MNO     ->  6
7PQRS    ->  7
8TUV     ->  8
9WXYZ    ->  9
```

Exemplo de entrada:



```bash
11-HOME-SWEET-HOME
2MY-MISERABLE-JOB
```

Saídas correspondentes:

```bash
11-4663-79338-4663
269-647372253-562
```

> Curiosidade: A frase *“The quick brown fox jumps over the lazy dog”* é um pantograma (frase com sentido em que são usadas todas as letras do alfabeto de determinada língua) da língua inglesa.

Verifique casos como entrada maior que 30 caracteres, vazia e com caracteres inválidos.

🚀 **Exercício 3** Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

- Devem seguir o formato nomeusuario@nomewebsite.extensao;

- O nome de usuário deve conter somente letras, dígitos, traços e *underscores* (_);

- O nome de usuário deve iniciar com uma letra;

- O nome do website deve conter somente letras e dígitos;

- O tamanho máximo da extensão é de 3 caracteres.

🦜 As funções `isalpha`, `isdigit` e `isnumeric` podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: `"1".isalpha() -> False , "a".isalpha() -> True, "123".isnumeric() -> True`.

**Exercício 4** Baseado no exercício anterior, escreva uma função que, dado uma lista de emails, deve retornar somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.

Exemplo: `["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] -> ["nome@dominio.com", "outro@dominio.com"]`.
