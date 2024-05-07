/// <reference types="react" />
import { ReactReduxContextValue, TypedUseSelectorHook } from 'react-redux';
export declare const counterStore: import("@reduxjs/toolkit").EnhancedStore<{
    someModule: {
        count: number;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        someModule: {
            count: number;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type CounterState = ReturnType<typeof counterStore.getState>;
export declare const CounterContext: import("react").Context<ReactReduxContextValue<any, import("redux").UnknownAction> | null>;
export type CounterDispatch = typeof counterStore.dispatch;
export declare const useCounterDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    someModule: {
        count: number;
    };
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
export declare const useCounterSelector: TypedUseSelectorHook<CounterState>;
