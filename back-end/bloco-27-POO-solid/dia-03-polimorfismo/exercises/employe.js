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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, birthDate, _salary) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._salary = _salary;
        _this._enrollment = String();
        _this.enrollment = _this.generateEnrollment();
        _this.salary = _salary;
        _this._admissionDate = new Date();
        return _this;
    }
    Object.defineProperty(Employee.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('O salário não pode ser negativo.');
            }
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "admissionDate", {
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
    Employee.prototype.generateEnrollment = function () {
        var randomEnrollment = Math.floor(Math.random() * 1000000);
        return "".concat(this.name.substring(0, 3)).concat(randomEnrollment);
    };
    return Employee;
}(person_1.default));
exports.default = Employee;
