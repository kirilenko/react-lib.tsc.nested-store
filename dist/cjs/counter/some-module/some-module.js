"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var use_some_module_selector_1 = require("./use.some-module.selector");
var use_some_module_action_1 = require("./use.some-module.action");
var SomeModule = function () {
    var count = (0, use_some_module_selector_1.useSomeModuleSelector)().count;
    var _a = (0, use_some_module_action_1.useSomeModuleAction)(), decrease = _a.decrease, increase = _a.increase;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "External some-module: ",
            count),
        react_1.default.createElement("button", { onClick: function () {
                decrease();
            } }, "-"),
        react_1.default.createElement("button", { onClick: function () {
                increase();
            } }, "+")));
};
exports.default = SomeModule;
//# sourceMappingURL=some-module.js.map