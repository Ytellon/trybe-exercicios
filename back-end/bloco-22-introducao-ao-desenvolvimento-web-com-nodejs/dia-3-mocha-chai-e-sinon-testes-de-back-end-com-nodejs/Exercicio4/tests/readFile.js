const { expect } = require('chai');
const writeFile = require('../writeFile');
const fs = require('fs');
const sinon = require('sinon');

describe('executa a funcao verifyNumber', () => {
    describe('quando o número for maior que 0', () => {
        describe('a resposta é', () => {
            it('é uma string', () => {
                const resposta = writeFile('arquivo.txt', '#BoredThanEver');

                expect(resposta).to.be.a('string');
            })
            it('é igual a positivo', () => {
                const resposta = writeFile('arquivo.txt', '#BoredThanEver');

                expect(resposta).to.equal('ok');
            })
        });
    });
});