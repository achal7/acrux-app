import Rx from 'rxjs';
import Bus from './Bus';
import Processor from './Processor';

const Memory = (stream, commands) => {
    const bus = Bus(stream, commands);
    const memory = Rx.BehaviorSubject({});
    bus.subscribe(memory);
    return memory;
};

export default Memory;
