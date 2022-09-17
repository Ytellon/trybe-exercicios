"use strict";
// Para testar!
// ./index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var subject_1 = require("./subject");
var teacher_1 = require("./teacher");
var math = new subject_1.default('Matemática');
var history = new subject_1.default('História');
var philosophy = new subject_1.default('Filosofia');
var marta = new teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
var joao = new teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
var lucio = new teacher_1.default('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
console.log(marta);
console.log(joao);
console.log(lucio);
// deve retornar erro
//const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// deve retornar erro
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
