import React from 'react';
import { CounterProvider, counterStore } from './counter.store';
import { SomeModule } from './some-module';
var Counter = function () {
    return (React.createElement(CounterProvider, { store: counterStore },
        React.createElement(SomeModule, null)));
};
export default Counter;
//# sourceMappingURL=counter.js.map