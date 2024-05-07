"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounterStore = exports.useCounterSelector = exports.useCounterDispatch = exports.CounterProvider = exports.CounterContext = exports.counterStore = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var toolkit_1 = require("@reduxjs/toolkit");
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
exports.CounterContext = (0, react_1.createContext)({
    dispatch: (function () { }),
    state: {},
    store: {},
});
var CounterProvider = function (_a) {
    var children = _a.children, store = _a.store;
    var _b = (0, react_1.useState)(store.getState()), state = _b[0], setState = _b[1];
    (0, react_1.useEffect)(function () {
        store.subscribe(function () {
            setState(store.getState());
        });
    }, [store]);
    return (react_1.default.createElement(exports.CounterContext.Provider, { value: { dispatch: store.dispatch, store: store, state: state } }, children));
};
exports.CounterProvider = CounterProvider;
var useCounterDispatch = function () { return (0, react_1.useContext)(exports.CounterContext).dispatch; };
exports.useCounterDispatch = useCounterDispatch;
var useCounterSelector = function (selector) {
    return selector((0, react_1.useContext)(exports.CounterContext).state);
};
exports.useCounterSelector = useCounterSelector;
var useCounterStore = function () { return (0, react_1.useContext)(exports.CounterContext).store; };
exports.useCounterStore = useCounterStore;
//# sourceMappingURL=counter.store.js.map