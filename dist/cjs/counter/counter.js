"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var counter_store_1 = require("./counter.store");
var some_module_1 = require("./some-module");
var Counter = function () {
    return (react_1.default.createElement(counter_store_1.CounterProvider, { store: counter_store_1.counterStore },
        react_1.default.createElement(some_module_1.SomeModule, null)));
};
exports.default = Counter;
//# sourceMappingURL=counter.js.map