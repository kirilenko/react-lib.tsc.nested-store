import { CaseReducer } from '@reduxjs/toolkit';
type State = {
    count: number;
};
export declare const someModuleSlice: import("@reduxjs/toolkit").Slice<State, {
    decrement: CaseReducer<State>;
    increment: CaseReducer<State, {
        payload: number;
        type: string;
    }>;
}, "someModule", "someModule", import("@reduxjs/toolkit").SliceSelectors<State>>;
export {};
