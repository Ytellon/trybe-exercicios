const { expect } = require('chai');
const writeFile = require('../writeFile');
const fs = require('fs');
const sinon = require('sinon');

describe('executa a funcao writeFile', () => {
    describe('quando o texto for autenticado', () => {
        before(() => {
            sinon.stub(fs, 'writeFileSync');
        });

        after(() => {
            fs.writeFileSync.restore();
        })
        describe('arquivo sendo verificado', () => {
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