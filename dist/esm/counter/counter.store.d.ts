import React, { FC, PropsWithChildren } from 'react';
import { TypedUseSelectorHook } from 'react-redux';
export declare const counterStore: import("@reduxjs/toolkit").EnhancedStore<{
    someModule: {
        count: number;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        someModule: {
            count: number;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export type CounterStore = typeof counterStore;
export type CounterState = ReturnType<CounterStore['getState']>;
export type CounterDispatch = CounterStore['dispatch'];
type CounterContextValueType = {
    dispatch: CounterDispatch;
    state: CounterState;
    store: CounterStore;
};
export declare const CounterContext: React.Context<CounterContextValueType>;
export declare const CounterProvider: FC<PropsWithChildren<{
    store: CounterStore;
}>>;
export declare const useCounterDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<{
    someModule: {
        count: number;
    };
}, undefined, import("@reduxjs/toolkit").UnknownAction> & import("@reduxjs/toolkit").Dispatch<import("@reduxjs/toolkit").UnknownAction>;
export declare const useCounterSelector: TypedUseSelectorHook<CounterState>;
export declare const useCounterStore: () => import("@reduxjs/toolkit").EnhancedStore<{
    someModule: {
        count: number;
    };
}, import("@reduxjs/toolkit").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("@reduxjs/toolkit").StoreEnhancer<{
    dispatch: import("@reduxjs/toolkit").ThunkDispatch<{
        someModule: {
            count: number;
        };
    }, undefined, import("@reduxjs/toolkit").UnknownAction>;
}>, import("@reduxjs/toolkit").StoreEnhancer]>>;
export {};
