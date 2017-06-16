import * as Core from './Core';
import Bus from './Bus';

const adapter = ( stream, incomingMessages, outgoingMessages ) => {
    incomingMessages = incomingMessages || [];
    outgoingMessages = outgoingMessages || [];
    
    const bus = Bus(stream, incomingMessages);
    const ioAdapter = makeActionDispatcher(bus, outgoingMessages);
    ioAdapter.subscribe = func => bus.map(e => e.payload).subscribe(func);
    bus.subscribe(d => console.log('IO Adapter:', d));
    return ioAdapter;
};

const makeActionDispatcher = (stream, actions) => {
    const actionDispatcher = Core.streamActionDispatcher(stream);
    var ioAdapter = {};
    Object.keys(actions).map(key => ioAdapter[key] = actionDispatcher(Core.makeCommand(actions[key])));
    return ioAdapter;
};

export default adapter;
