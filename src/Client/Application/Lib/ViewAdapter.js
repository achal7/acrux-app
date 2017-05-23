const makeCommand = event => payload => ({  
    name: event.triggerEvent,
    payload: payload
});

const initState = [];
const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));

const adapter = ( stream, events, commands ) => {
    events = events || [];
    commands = commands || [];
    const actionDispatcher = streamActionDispatcher(stream);
    const ioStream = stream  
                        .startWith(initState)
                        .filter(command => events.find( allowed => allowed.name === command.name));
    //ioStream.subscribe(d => console.log('IO Adapter:', d));
    var ioAdapter = {};
    Object.keys(events).map(key => ioAdapter[key] = actionDispatcher(makeCommand(events[key])));
    ioAdapter.subscribe = func => ioStream.subscribe(func);
    return ioAdapter;
};

export default adapter;
