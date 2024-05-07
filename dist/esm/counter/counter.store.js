var _a;
import React, { createContext, useContext, useEffect, useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { someModuleSlice } from './some-module/some-module.slice';
export var counterStore = configureStore({
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
    reducer: (_a = {},
        _a[someModuleSlice.name] = someModuleSlice.reducer,
        _a),
});
export var CounterContext = createContext({
    dispatch: (function () { }),
    state: {},
    store: {},
});
export var CounterProvider = function (_a) {
    var children = _a.children, store = _a.store;
    var _b = useState(store.getState()), state = _b[0], setState = _b[1];
    useEffect(function () {
        store.subscribe(function () {
            setState(store.getState());
        });
    }, [store]);
    return (React.createElement(CounterContext.Provider, { value: { dispatch: store.dispatch, store: store, state: state } }, children));
};
export var useCounterDispatch = function () { return useContext(CounterContext).dispatch; };
export var useCounterSelector = function (selector) {
    return selector(useContext(CounterContext).state);
};
export var useCounterStore = function () { return useContext(CounterContext).store; };
//# sourceMappingURL=counter.store.js.map