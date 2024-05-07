"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSomeModuleSelector = void 0;
var counter_store_1 = require("../counter.store");
var some_module_slice_1 = require("./some-module.slice");
var useSomeModuleSelector = function () { return (0, counter_store_1.useCounterSelector)(function (state) { return state[some_module_slice_1.someModuleSlice.name]; }); };
exports.useSomeModuleSelector = useSomeModuleSelector;
//# sourceMappingURL=use.some-module.selector.js.map