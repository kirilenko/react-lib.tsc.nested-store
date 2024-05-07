import React from 'react';
import { Provider } from 'react-redux';
import { CounterContext, counterStore } from './counter.store';
import { SomeModule } from './some-module';
var Counter = function () {
    return (React.createElement(Provider, { context: CounterContext, store: counterStore },
        React.createElement(SomeModule, null)));
};
export default Counter;
//# sourceMappingURL=counter.js.map