### O que aprendi:

- Utilizar o método `updateOne()`;

- Utilizar o método `updateMany()`;

- Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`;

- Renomear campos utilizando o operador `$rename`;

- Remover campos utilizando o operador `$unset`.

---

# Exercícios - agora, a prática

> 

Para os exercícios, você utilizará um dataset pequeno com alguns filmes.

Conecte-se à sua instância do **MongoDB** local e insira os seguintes documentos na coleção `movies` do banco de dados `class`:

Copiar

```js
1{
2  "title": "Batman",
3  "category": [ "action", "adventure" ],
4  "imdbRating": 7.6,
5  "budget": 35
6},
7{
8  "title": "Godzilla",
9  "category": [ "action", "adventure", "sci-fi" ],
10  "imdbRating": 6.6
11},
12{
13  "title": "Home Alone",
14  "category": [ "family", "comedy" ],
15  "imdbRating": 7.4
16}
```

Verifique se você tem três documentos na coleção.

---

## Para cada execução, utilize o método find() para conferir as alterações nos documentos.

O MongoDB possui diversas ferramentas, como, por exemplo, `mongo`, `mongo sh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries*, o importante é realizá-las.

**Exercício 1**: Altere o `imdbRating` para `7.7` no filme `Batman`.

**Exercício 2**: Altere `budget` para `1` no filme `Godzilla`.

**Exercício 3**: Altere `budget` para `15` e `imdbRating` para `5.5` no filme `Home Alone`.

**Exercício 4**: Aumente em `2` o `imdbRating` do filme `Batman`.

**Exercício 5**: Aumente em `5` o `budget` do filme `Home Alone`.

**Exercício 6**: Multiplique por `4` o `imdbRating` do filme `Batman`.

**Exercício 7**: Renomeie o campo `budget` para `estimatedBudget` do filme `Batman`.

**Exercício 8**: Utilize o operador `$min` para alterar o `budget` para `5` do filme `Home Alone`.

**Exercício 9**: Utilize o operador `$max` para alterar o `imdbRating` para `8.6` do filme `Godzilla`. Além disso, altere a categoria `"adventure"` para `"thriller"` do filme `Godzilla`.

**Exercício 10**: Utilizando o operador `$currentDate`, crie um campo chamado `lastUpdated` com o tipo `timestamp` no filme `Home Alone`.

**Exercício 11**: Utilizando uma única operação, crie um campo chamado `sequels` e atribua a ele o valor `0` em todos os documentos.

**Exercício 12**: Utilizando uma única operação, remova os campos `budget` e `estimatedBudget` em todos os documentos.

**Exercício 13**: Para os filmes `Batman` ou `Home Alone`, atribua a `imdbRating` o valor `17`, caso o valor de `imdbRating` seja menor que `17`.


