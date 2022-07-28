const { expect } = require('chai');
const verifyNumber = require('../NumberExercise');

describe('executa a funcao verifyNumber', () => {
    describe('quando o número for maior que 0', () => {
        describe('a resposta é', () => {
            it('é uma string', () => {
                const resposta = verifyNumber(1);

                expect(resposta).to.be.a('string');
            })
            it('é igual a positivo', () => {
                const resposta = verifyNumber(1);

                expect(resposta).to.equal('Positivo');
            })
        });
    });

    describe('quando o número for menor que 0', () => {
        describe('a resposta é', () => {
            it('é uma string', () => {
                const resposta = verifyNumber(-1);

                expect(resposta).to.be.a('string');
            })
            it('é igual a negativo', () => {
                const resposta = verifyNumber(-1);

                expect(resposta).to.equal('Negativo');
            })
        });
    });

    describe('quando o número for igual a 0', () => {
        describe('a resposta é', () => {
            it('é uma string', () => {
                const resposta = verifyNumber(0);

                expect(resposta).to.be.a('string');
            })
            it('é igual a negativo', () => {
                const resposta = verifyNumber(0);

                expect(resposta).to.equal('Neutro');
            })
        });
    });

    describe('quando o parametro não for número', () => {
        describe('a resposta é', () => {
            it('é uma string', () => {
                const resposta = verifyNumber('a');

                expect(resposta).to.be.a('string');
            });
            it('é igual a: o valor deve ser um número', () => {
                const resposta = verifyNumber('a');

                expect(resposta).to.equal('O valor deve ser um número');
            })
        })
    });
});