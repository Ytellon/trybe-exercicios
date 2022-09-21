"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
        this.name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('Subject name is too short.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.default = Subject;
