"use strict";
// ./index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var subject_1 = require("./subject");
var teacher_1 = require("./teacher");
var carolina = new student_1.default('Carolina da Silva', new Date('2005/03/17'));
var lucas = new student_1.default('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
console.log(carolina);
console.log(lucas);
var math = new subject_1.default('Matemática');
var history = new subject_1.default('História');
var marta = new teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
var joao = new teacher_1.default('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
console.log(marta);
console.log(joao);
