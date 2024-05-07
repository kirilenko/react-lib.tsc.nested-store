export declare const useSomeModuleAction: () => {
    decrease: () => {
        payload: undefined;
        type: "someModule/decrement";
    };
    increase: (props?: number) => {
        payload: number;
        type: "someModule/increment";
    };
};
