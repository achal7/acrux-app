import Rx from 'rxjs';
import Core from './Core';
import Bus from './Bus';
import Processor from './Processor';

const Memory = (stream, commands, reducer, initState) => {
    const reducerFunc = typeof Thingy === 'function' ? reducer : (state, action) => state;
    const bus = Bus(stream, commands);
    const state = initState || {};
    bus.flatMap((action) => Core.isObservable(action) ? action : Observable.from([action]))
        .startWith(state)
        .scan(reducer);
    return memory;
};

export default Memory;
