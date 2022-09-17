"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthdate, _salary, subjects) {
        var _this = _super.call(this, name, birthdate) || this;
        _this._salary = _salary;
        _this._subjects = subjects;
        _this.salary = _salary;
        _this.registration = _this.generateRegistration();
        _this._admissionDate = new Date();
        return _this;
    }
    Teacher.prototype.generateRegistration = function () {
        var randomRegistration = Math.floor(Math.random() * 1000000);
        return "".concat(this.name.substring(0, 3)).concat(randomRegistration);
    };
    Object.defineProperty(Teacher.prototype, "subjects", {
        get: function () {
            return this._subjects;
        },
        set: function (value) {
            this._subjects = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (value) {
            if (value.length < 5) {
                throw new Error('Registration is too short.');
            }
            this._registration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (value) {
            if (value.getTime() > new Date().getTime())
                throw new Error('A data de admissão não pode ser uma data no futuro.');
            this._admissionDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            if (value < 500) {
                throw new Error('Salary is too low.');
            }
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    return Teacher;
}(person_1.default));
exports.default = Teacher;
