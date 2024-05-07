import React from 'react';
import { useSomeModuleSelector } from './use.some-module.selector';
import { useSomeModuleAction } from './use.some-module.action';
var SomeModule = function () {
    var count = useSomeModuleSelector().count;
    var _a = useSomeModuleAction(), decrease = _a.decrease, increase = _a.increase;
    return (React.createElement("div", null,
        React.createElement("p", null,
            "External some-module: ",
            count),
        React.createElement("button", { onClick: function () {
                decrease();
            } }, "-"),
        React.createElement("button", { onClick: function () {
                increase();
            } }, "+")));
};
export default SomeModule;
//# sourceMappingURL=some-module.js.map