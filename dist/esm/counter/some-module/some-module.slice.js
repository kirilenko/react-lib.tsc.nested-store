import { __assign } from "tslib";
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    count: 0,
};
// w/o payload:
var decrement = function (state) { return (__assign(__assign({}, state), { count: state.count - 1 })); };
// w/ payload:
var increment = function (state, action) { return (__assign(__assign({}, state), { count: state.count + (action.payload || 1) })); };
export var someModuleSlice = createSlice({
    initialState: initialState,
    name: 'someModule',
    reducers: {
        decrement: decrement,
        increment: increment,
    },
});
//# sourceMappingURL=some-module.slice.js.map