import { useCounterSelector } from '../counter.store';
import { someModuleSlice } from './some-module.slice';
export var useSomeModuleSelector = function () { return useCounterSelector(function (state) { return state[someModuleSlice.name]; }); };
//# sourceMappingURL=use.some-module.selector.js.map