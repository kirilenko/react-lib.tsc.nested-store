"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounterSelector = exports.useCounterDispatch = exports.CounterContext = exports.counterStore = void 0;
var react_redux_1 = require("react-redux");
var toolkit_1 = require("@reduxjs/toolkit");
var react_1 = require("react");
var some_module_slice_1 = require("./some-module/some-module.slice");
exports.counterStore = (0, toolkit_1.configureStore)({
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
    reducer: (_a = {},
        _a[some_module_slice_1.someModuleSlice.name] = some_module_slice_1.someModuleSlice.reducer,
        _a),
});
exports.CounterContext = (0, react_1.createContext)(null);
var useCounterDispatch = function () {
    var _a;
    var _b = (((_a = (0, react_1.useContext)(exports.CounterContext)) === null || _a === void 0 ? void 0 : _a.store) || {}).dispatch, dispatch = _b === void 0 ? function () { } : _b;
    return dispatch;
};
exports.useCounterDispatch = useCounterDispatch;
exports.useCounterSelector = (0, react_redux_1.createSelectorHook)(exports.CounterContext);
//# sourceMappingURL=counter.store.js.map