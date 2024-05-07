"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someModuleSlice = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    count: 0,
};
// w/o payload:
var decrement = function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { count: state.count - 1 })); };
// w/ payload:
var increment = function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { count: state.count + (action.payload || 1) })); };
exports.someModuleSlice = (0, toolkit_1.createSlice)({
    initialState: initialState,
    name: 'someModule',
    reducers: {
        decrement: decrement,
        increment: increment,
    },
});
//# sourceMappingURL=some-module.slice.js.map