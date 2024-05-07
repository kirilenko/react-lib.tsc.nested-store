import { useCounterDispatch } from '../counter.store';
import { someModuleSlice } from './some-module.slice';
export var useSomeModuleAction = function () {
    var dispatch = useCounterDispatch();
    var actions = someModuleSlice.actions;
    return {
        decrease: function () { return dispatch(actions.decrement()); },
        increase: function (props) { return dispatch(actions.increment(props || 1)); },
    };
};
//# sourceMappingURL=use.some-module.action.js.map