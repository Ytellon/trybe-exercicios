### O que aprendi:

- Utilizar o operador `$all` para filtrar documentos;

- Utilizar o operador `$elemMatch` para filtrar documentos;

- Utilizar o operador `$size` para filtrar documentos pelo tamanho de *arrays*;

- Utilizar o operador `$expr` para criar expressões de agregação;

- Utilizar expressões regulares e o operador `$regex` para buscar documentos;

- Utilizar o operador `$mod`.

---

# Agora, a prática!

> 🚀 *Se liga nesse foguete!*
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Para realizar os exercícios de hoje, você utilizará um *dataset* de filmes. Para isso, crie a coleção `movies`:

Copiar

```js
1use cinema;
2db.movies.drop();
3db.movies.insertMany([
4  {
5    title: "Batman",
6    category: [
7      "action",
8      "adventure"
9    ],
10    imdbRating: 7.7,
11    budget: 35,
12    ratings: [ 85, 100, 102, 105 ],
13    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
14  },
15  {
16    title: "Godzilla",
17    category: [
18      "action",
19      "adventure",
20      "sci-fi"
21    ],
22    imdbRating: 6.6,
23    budget: 10,
24    ratings: [ 78, 52, 95, 102 ],
25    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
26  },
27  {
28    title: "Home Alone",
29    category: [
30      "family",
31      "comedy"
32    ],
33    imdbRating: 7.4,
34    ratings: [ 200, 99, 65 ],
35    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
36  },
37  {
38    title: "Matrix",
39    category: [
40      "sci-fi",
41      "action"
42    ],
43    imdbRating: 8.7,
44    budget: 15,
45    ratings: [ 77, 92, 150, 180 ],
46    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
47  },
48  {
49    title: "Pulp Fiction",
50    category: [
51      "crime",
52      "drama"
53    ],
54    imdbRating: 8.9,
55    budget: 8,
56    ratings: [ 110, 84, 95, 90 ],
57    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
58  }
59]);
```

---

## Para cada execução, utilize o método find() para conferir as alterações nos documentos

O “MongoDB” possui diversas ferramentas como por exemplo, `mongo`, `mongosh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries*, o importante é realizá-las.

1. Utilizando o operador `$all`, retorne todos os filmes que contenham `action` e `adventure` no *array* `category`.
2. 🚀 Agora retorne os filmes que contenham `action` e `sci-fi` no *array* `category` e possuem nota do **IMDB** maior do que `7`.
3. Retorne todos os filmes com `ratings` maior do que `103`, exibindo apenas os campos `title` e `ratings`.
4. 🚀 Retorne todos os filmes com `ratings` entre `100` e `105`, exibindo apenas os campos `title` e `ratings`.
5. 🚀 Retorne todos os filmes com `ratings` entre `64` e `105` e divisíveis por `9`, exibindo apenas os campos `title` e `ratings`.
6. Retorne os filmes da categoria `adventure` e com `ratings` maior do que `103`, exibindo apenas os campos `title`, `ratings` e `category`.
7. Retorne somente o título de todos os filmes com dois elementos no *array* `category`.
8. 🚀 Retorne somente o título de todos os filmes com quatro elementos no *array* `ratings`.
9. Busque os filmes em que o módulo 5 do campo `budget` seja 0 e que o array `category` tenha tamanho `2`.
10. 🚀 Retorne os filmes da categoria `"sci-fi"` ou que possua o `ratings` maior do que `199`, exibindo apenas os campos `title`, `ratings` e `category`.
11. Retorne os filmes em que o `ratings` possua tamanho 4 e que seja da `category` `"adventure"` ou `"family"`, mas que não tenha o `imdbRating` menor que 7.
12. 🚀 Utilizando o operador `$regex`, retorne todos os filmes em que a descrição comece com a palavra `"The"`.
13. Utilizando o operador `$regex`, retorne todos os filmes em que a descrição termine com a palavra `"humanity."`.
