"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Counter = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b;
    var _c = (0, react_1.useState)(value), counter = _c[0], setCounter = _c[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null,
            "External counter: ",
            counter),
        react_1.default.createElement("button", { onClick: function () { return setCounter(function (p) { return p - 1; }); } }, "-"),
        react_1.default.createElement("button", { onClick: function () { return setCounter(function (p) { return p + 1; }); } }, "+")));
};
exports.default = Counter;
//# sourceMappingURL=counter.js.map