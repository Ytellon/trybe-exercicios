"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthdate) {
        this.name = _name;
        this.birthdate = _birthdate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length < 3) {
                throw new Error("Name is too short");
            }
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthdate", {
        get: function () {
            return this._birthdate;
        },
        set: function (birthdate) {
            if (birthdate.getTime() > new Date().getTime())
                throw new Error('A data de nascimento não pode ser uma data no futuro.');
            if (Person.getAge(birthdate) > 120)
                throw new Error('A pessoa deve ter no máximo 120 anos.');
            this._birthdate = birthdate;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (value) {
        var diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        var yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    };
    return Person;
}());
exports.default = Person;
