var _a;
import { createSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createContext, useContext } from 'react';
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
export var CounterContext = createContext(null);
export var useCounterDispatch = function () {
    var _a;
    var _b = (((_a = useContext(CounterContext)) === null || _a === void 0 ? void 0 : _a.store) || {}).dispatch, dispatch = _b === void 0 ? function () { } : _b;
    return dispatch;
};
export var useCounterSelector = createSelectorHook(CounterContext);
//# sourceMappingURL=counter.store.js.map