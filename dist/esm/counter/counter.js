import React, { useState } from 'react';
var Counter = function (_a) {
    var _b = _a.value, value = _b === void 0 ? 0 : _b;
    var _c = useState(value), counter = _c[0], setCounter = _c[1];
    return (React.createElement("div", null,
        React.createElement("p", null,
            "External counter: ",
            counter),
        React.createElement("button", { onClick: function () { return setCounter(function (p) { return p - 1; }); } }, "-"),
        React.createElement("button", { onClick: function () { return setCounter(function (p) { return p + 1; }); } }, "+")));
};
export default Counter;
//# sourceMappingURL=counter.js.map