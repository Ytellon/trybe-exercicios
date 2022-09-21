## O que aprendi:

- Descrever, como pilar da Programação Orientada a Objetos, o **Polimorfismo**: múltiplas formas de se implementar um método descrito em uma interface;

- Descrever **Classe Abstrata** como uma classe que não pode ser instanciada, devendo ser usada apenas por suas **Classes Herdeiras**;

- Definir **Métodos Abstratos** , ou **Funções Abstratas**;

- Implementar **Métodos Estáticos** para Classes em TypeScript.

---

# Exercícios - agora, a prática

Nosso software escolar desenvolvido nos exercícios dos dias anteriores ainda não está completo, e com os conhecimentos que adquirimos nesse dia podemos deixá-lo ainda mais conciso dentro do paradigma de orientação a objetos. Por isso, iremos mais uma vez refatorar algumas partes do nosso sistema aplicando os novos conceitos de polimorfismo apresentados no dia de hoje e criar novas funcionalidades.

**Importante**: Devido uma restrição em transpilar arquivos `.ts` para `.js` em versões posteriores ao ES5. Utilize o seguinte comando para executar a transpilação corretamente:

Copiar

```bash
1npx tsc -t es5 ./index.ts
```

**Notação**: Vamos continuar utilizando a notação adotada nos exercícios do dia anterior para dispor a modelagem dos nossos componentes do sistema.

Copiar

```md
1`Class`: Nome da classe, caso seja uma classe
2`Interface`: Nome da interface, caso seja uma interface
3`Extends`: Classe a qual herda, caso exista
4`Implements`: Interfaces a qual implementa, caso exista
5`Attributes`: Atributos
6`Methods`: Métodos
7`Validations`: Validações que devem ser aplicadas aos atributos
```

Ainda sobre a notação, vamos adicionar informações aos nossos componentes em relação ao encapsulamento, por exemplo, `Abstract` caso se trate de uma classe ou método abstrato.

> 🚀 *Se liga nesse foguete!*
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀 **Exercício 1**: A classe pessoa no nosso sistema hoje é uma classe comum que pode ser instanciada, ou seja, conseguimos criar novas pessoas diretamente. Porém isso não faz sentido, já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes que herdam dela.

🚀 **Exercício 2**: Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:

**A**: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.

**B**: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.

**C**: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

Nossa nova modelagem para esses componentes ficará assim:



```md
1`Interface`: Enrollable
2`Attributes`:
3    - enrollment: identificador único da matrícula
4`Methods`:
5    - generateEnrollment: retorna uma string única gerada como matrícula
```



```md
1`Class`: Student
2`Extends`: Person
3`Implements`: Enrollable
4`Attributes`:
5    - examsGrades: notas de provas
6    - worksGrades: notas de trabalhos
7`Methods`:
8    - Getters/Setters
9    - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
10    - sumGrades: retorna a soma das notas da pessoa estudante
11    - sumAverageGrade: retorna a média das notas da pessoa estudante
12`Validations`:
13    - A matrícula deve possuir no mínimo 16 caracteres
14    - A pessoa estudante deve possuir no máximo 4 notas de provas
15    - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos
```



```md
1`Class`: Employee
2`Extends`: Person
3`Implements`: Enrollable
4`Attributes`:
5    - salary: valor do salário
6    - admissionDate: data de admissão
7`Methods`:
8    - Getters/Setters
9    - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
10`Validations`:
11    - A matrícula deve possuir no mínimo 16 caracteres
12    - O salário não pode ser negativo.
13    - A data de admissão não pode ser no futuro
```



```md
1`Class`: Teacher
2`Extends`: Employee
3`Attributes`:
4    - subject: a disciplina lecionada pela pessoa professora
5`Methods`:
6    - Getters/Setters
7    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
8`Validations`:
9    - A matrícula deve possuir no mínimo 16 caracteres
10    - O salário não pode ser negativo.
11    - A data de admissão não pode ser no futuro
```

Para testar crie duas pessoas estudantes e duas pessoas professoras.
