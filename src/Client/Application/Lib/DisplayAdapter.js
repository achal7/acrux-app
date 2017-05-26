import * as Core from './Core';

const adapter = ( stream, viewEvents, ioEvents ) => {
    viewEvents = viewEvents || [];
    ioEvents = ioEvents || [];
    const actionDispatcher = Core.streamActionDispatcher(stream);
    const ioStream = stream 
                    .filter(event => viewEvents.find( allowed => allowed.name === event.name));
    //ioStream.subscribe(d => console.log('IO Adapter:', d));
    var ioAdapter = {};
    Object.keys(ioEvents).map(key => ioAdapter[key] = actionDispatcher(Core.makeCommand(ioEvents[key])));
    ioAdapter.subscribe = func => ioStream.map(e => e.payload).subscribe(func);
    return ioAdapter;
};

export default adapter;
