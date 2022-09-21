### O que aprendi:

- Escrever funções e classes que tenham uma única responsabilidade no escopo da sua aplicação.

- Escrever classes com funções que estão abertas para extensão e fechadas para modificação.

- Inverter dependências para dar a quem chama o controle sobre como uma função faz o que precisa.

---

# Exercícios - agora, a prática

## Preparando o ambiente

Antes de começarmos, vamos preparar o ambiente para a resolução dos exercícios 🚀

> package.json



```json
1{
2  "name": "solid-1-exercises",
3  "version": "1.0.0",
4  "description": "",
5  "scripts": {
6    "lint": "eslint . --ext .ts"
7  },
8  "keywords": [
9    "typescript",
10    "solid",
11    "refactor"
12  ],
13  "author": "Pessoa Estudante",
14  "license": "ISC",
15  "devDependencies": {
16    "@types/express": "4.17.13",
17    "@types/node": "16.7.8",
18    "@typescript-eslint/eslint-plugin": "4.30.0",
19    "@typescript-eslint/parser": "4.30.0",
20    "eslint": "7.32.0",
21    "eslint-config-trybe-backend": "1.0.4",
22    "eslint-plugin-import": "2.26.0",
23    "eslint-plugin-mocha": "10.0.4",
24    "eslint-plugin-sonarjs": "0.13.0",
25    "ts-node": "10.2.1",
26    "typescript": "4.4.2"
27  },
28  "dependencies": {
29    "body-parser": "1.19.0",
30    "eslint-config-trybe-backend": "1.0.4",
31    "express": "4.17.1"
32  }
33}
```

> .eslintrc.json



```json
1{
2    "root": true,
3    "extends": [
4        "eslint:recommended",
5        "plugin:@typescript-eslint/recommended",
6        "trybe-backend"
7    ],
8    "parser": "@typescript-eslint/parser",
9    "parserOptions": {
10        "ecmaVersion": 12,
11        "sourceType": "module"
12    },
13    "ignorePatterns": ["tests/", "node_modules/"],
14    "env": { "es2021": true },
15    "plugins": ["@typescript-eslint"],
16    "rules": {
17        "no-unused-vars": "off",
18        "@typescript-eslint/no-unused-vars": ["error"],
19        "no-shadow": "off",
20        "@typescript-eslint/no-shadow": "error",
21        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }]
22    }
23}
```



> tsconfig.json



```json
1{
2  "compilerOptions": {
3    "target": "es6",
4    "module": "commonjs",
5    "esModuleInterop": true,
6    "forceConsistentCasingInFileNames": true,
7    "strict": true,
8    "skipLibCheck": true
9  }
10}
```

> opsInfo.json



```json
1{
2  "createdPlants": 2
3}
```

> plantsData.json



```json
1[
2  {
3    "id": "16372398-b28f-4a39-8e67-3f6a035ee076",
4    "breed": "Bromelia",
5    "size": 102,
6    "needsSun": false,
7    "origin": "Argentina",
8    "specialCare": {
9      "waterFrequency": 3
10    }
11  },
12  {
13    "id": "cb9aea00-d3fa-44b0-a4b4-7bd4c1a32770",
14    "breed": "Orquidea",
15    "size": 99,
16    "needsSun": true,
17    "origin": "Brazil"
18  }
19]
```

```typescript
1// Plants.ts
2
3import fs from 'fs/promises';
4
5interface IPlant {
6  id: string,
7  breed: string,
8  needsSun: boolean,
9  origin: string,
10  size: number,
11  specialCare?: { waterFrequency: number }
12}
13
14interface IOpsInfo { createdPlants: number }
15
16class Plants {
17  private readonly plantsFile = 'plantsData.json';
18  private readonly opsFile = 'opsInfo.json';
19
20  public initPlant(plant: IPlant): IPlant {
21    const { id, breed, needsSun, origin, specialCare, size } = plant;
22    const waterFrequency = needsSun
23      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
24      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
25
26    const newPlant: IPlant = {
27      id,
28      breed,
29      needsSun,
30      origin,
31      specialCare: {
32        ...specialCare,
33        waterFrequency,
34      },
35      size,
36    };
37
38    return newPlant;
39  }
40
41  public async getPlants(): Promise<IPlant[]> {
42    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
43    const plants: IPlant[] = JSON.parse(plantsRaw);
44    return plants;
45  }
46
47  public async getPlantById(
48    id: string,
49  ): Promise<IPlant | null> {
50    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
51    const plants: IPlant[] = JSON.parse(plantsRaw);
52
53    const plantById = plants.find((plant) => plant.id === id);
54    if (!plantById) return null;
55    return plantById;
56  }
57
58  public async removePlantById(
59    id: string,
60  ): Promise<IPlant | null> {
61    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
62    const plants: IPlant[] = JSON.parse(plantsRaw);
63
64    const removedPlant = plants.find((plant) => plant.id === id);
65    if (!removedPlant) return null;
66
67    const newPlants = plants.filter((plant) => plant.id !== id);
68    await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));
69
70    return removedPlant;
71  }
72
73  public async getPlantsThatNeedsSunWithId(
74    id: string,
75  ): Promise<IPlant[]> {
76    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
77    const plants: IPlant[] = JSON.parse(plantsRaw);
78
79    const filteredPlants = plants.filter((plant) =>
80      plant.id === id
81      && plant.needsSun
82      && (!plant.specialCare
83        || plant.specialCare.waterFrequency > 2));
84
85    return filteredPlants;
86  }
87
88  public async editPlant(
89    plantId: string,
90    newPlant: IPlant,
91  ): Promise<IPlant> {
92    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
93    const plants: IPlant[] = JSON.parse(plantsRaw);
94
95    const updatedPlants = plants.map((plant) => {
96      if (plant.id === plantId) return newPlant;
97      return plant;
98    });
99
100    await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
101    return newPlant;
102  }
103
104  public async savePlant(
105    plant: IPlant,
106  ): Promise<IPlant> {
107    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
108    const plants: IPlant[] = JSON.parse(plantsRaw);
109
110    const newPlant = this.initPlant({ ...plant });
111    plants.push(newPlant);
112
113    const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
114    let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
115    createdPlants += 1;
116    await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));
117
118    await fs.writeFile(this.plantsFile, JSON.stringify(plants));
119    return newPlant;
120  }
121}
122
123 export default Plants;
```

Instale as dependências do projeto:

```bash
1 npm install
```

## Iniciando

Esse módulo controla um catálogo de plantas para um instituto de botânica. Você deverá usar o Typescript para adaptar o código de modo a transformá-lo em uma API respeitando os princípios SOLID. Para isso, você deverá modificar o arquivo `Plants.ts`, bem como criar um arquivo `index.ts` para criar sua API com Express.

- Foque nos princípios aprendidos hoje: `Single Responsibility`, `Dependency Inversion` e `Open/Closed`.

- Lembre-se de aproveitar os pilares da Orientação a Objetos quando precisar 😎

Precisamos ter os endpoints:

- `GET /plants`: retorna todas as plantas;

- `GET /plant/:id`: retorna uma planta com o id;

- `DELETE /plant/:id`: deleta uma planta com o id;

- `POST /plant/:id`: sobrescreve a planta com id;

- `POST /plant`: cria uma planta nova;

- `GET /sunny/:id`: retorna uma planta que precisa de sol com o id.






