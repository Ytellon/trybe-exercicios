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
var employe_1 = require("./employe");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subjects) {
        var _this = _super.call(this, name, birthDate, salary) || this;
        _this._registration = String();
        _this._subjects = subjects;
        return _this;
    }
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
    return Teacher;
}(employe_1.default));
exports.default = Teacher;
