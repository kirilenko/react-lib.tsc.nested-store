"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSomeModuleAction = void 0;
var counter_store_1 = require("../counter.store");
var some_module_slice_1 = require("./some-module.slice");
var useSomeModuleAction = function () {
    var dispatch = (0, counter_store_1.useCounterDispatch)();
    var actions = some_module_slice_1.someModuleSlice.actions;
    return {
        decrease: function () { return dispatch(actions.decrement()); },
        increase: function (props) { return dispatch(actions.increment(props || 1)); },
    };
};
exports.useSomeModuleAction = useSomeModuleAction;
//# sourceMappingURL=use.some-module.action.js.map