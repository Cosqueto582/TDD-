const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
    it("Operação de soma", () => {
        let resultado = calculadora.sum(2, 3);
        expect(resultado).toEqual(5);

        resultado = calculadora.sum(25, 25);
        expect(resultado).toEqual(50);

        resultado = calculadora.sum(40, 10);
        expect(resultado).toEqual(50);

        resultado = calculadora.sum(13, 26);
        expect(resultado).toEqual(39);

        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um número");
    });

    it("Operacao Sub", () => {
        let resultado = calculadora.sub(2, 3);
        expect(resultado).toEqual(-1);

        resultado = calculadora.sub(0, 5);
        expect(resultado).toEqual(-5);

        resultado = calculadora.sub(1, 1);
        expect(resultado).toEqual(0);

        resultado = calculadora.sub(15, 5);
        expect(resultado).toEqual(10);

        resultado = calculadora.sub(12, 10);
        expect(resultado).toEqual(2);
    });

    it("Operacao Mult", () => {
        let resultado = calculadora.mult(1, 6);
        expect(resultado).toEqual(6);

        resultado = calculadora.mult(2, 6);
        expect(resultado).toEqual(12);

        resultado = calculadora.mult(4, 5);
        expect(resultado).toEqual(20);

        resultado = calculadora.mult(10, 10);
        expect(resultado).toEqual(100);

        resultado = calculadora.mult(100, 10);
        expect(resultado).toEqual(1000);

        resultado = calculadora.mult(32, 8);
        expect(resultado).toEqual(256);

        resultado = calculadora.mult(30, 30);
        expect(resultado).toEqual(900);

        resultado = calculadora.mult(4, 4);
        expect(resultado).toEqual(16);
    });

    it("Operacao div", () => {
        let resultado = calculadora.div(6, 2);
        expect(resultado).toEqual(3);

        resultado = calculadora.div(15, 5);
        expect(resultado).toEqual(3);

        resultado = calculadora.div(6, 1);
        expect(resultado).toEqual(6);

        resultado = calculadora.div(6, 11);
        expect(resultado).toEqual(0.5454545454545454);

        resultado = calculadora.div(4, 10);
        expect(resultado).toEqual(0.4);

        resultado = calculadora.div(7, 10);
        expect(resultado).toEqual(0.7);

        resultado = calculadora.div(1, 1);
        expect(resultado).toEqual(1);

        resultado = calculadora.div(5, 4);
        expect(resultado).toEqual(1.25);

        resultado = calculadora.div(8, 8);
        expect(resultado).toEqual(1);
    });

    it("Operacao pot", () => {
        let resultado = calculadora.pot(2, 5);
        expect(resultado).toEqual(32);

        resultado = calculadora.pot(70, 3);
        expect(resultado).toEqual(343000);

        resultado = calculadora.pot(2, 2);
        expect(resultado).toEqual(4);

        resultado = calculadora.pot(9, 5);
        expect(resultado).toEqual(59049);

        resultado = calculadora.pot(7, 7);
        expect(resultado).toEqual(823543);

        resultado = calculadora.pot(4, 10);
        expect(resultado).toEqual(1048576);

        resultado = calculadora.pot(2, 4);
        expect(resultado).toEqual(16);

        resultado = calculadora.pot(2, 9);
        expect(resultado).toEqual(512);

        resultado = calculadora.pot(4, 6);
        expect(resultado).toEqual(4096);
    });

    it("Operacao raiz", () => {
        let resultado = calculadora.raiz(Math.sqrt(9));
        expect(resultado).toEqual(1.7320508075688772);
        resultado = calculadora.raiz(Math.sqrt(4));
        expect(resultado).toEqual(1.4142135623730951);
        resultado = calculadora.raiz(Math.sqrt(16));
        expect(resultado).toEqual(2);
        resultado = calculadora.raiz(Math.sqrt(25));
        expect(resultado).toEqual(2.23606797749979);
        resultado = calculadora.raiz(Math.sqrt(81));
        expect(resultado).toEqual(3);
        resultado = calculadora.raiz(Math.sqrt(64));
        expect(resultado).toEqual(2.8284271247461903);
        resultado = calculadora.raiz(Math.sqrt(49));
        expect(resultado).toEqual(2.6457513110645907);
        resultado = calculadora.raiz(Math.sqrt(196));
        expect(resultado).toEqual(3.7416573867739413);
        resultado = calculadora.raiz(Math.sqrt(6561));
        expect(resultado).toEqual(9);
    });
});