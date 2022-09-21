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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthdate) {
        var _this = _super.call(this, name, birthdate) || this;
        _this._enrollment = '';
        _this.generateEnrollment = function () {
            var randomEnrollment = Math.floor(Math.random() * 1000000);
            return "".concat(_this.name.substring(0, 3)).concat(randomEnrollment);
        };
        _this.enrollment = _this.generateEnrollment();
        _this._examsGrades = [];
        _this._worksGrades = [];
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4) {
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "worksGrades", {
        get: function () {
            return this._worksGrades;
        },
        set: function (value) {
            if (value.length > 2) {
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            }
            this._worksGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}(person_1.default));
exports.default = Student;
