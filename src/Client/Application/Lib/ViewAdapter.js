const makeCommand = command => payload => ({  
    type: command,
    payload
});

const initState = [];
const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));

const adapter = ( stream, events, commands ) => {
    events = events || [];
    commands = commands || [];
    const actionDispatcher = streamActionDispatcher(stream);
    const ioStream = stream  
                        .startWith(initState)
                        .filter(event => Object.keys(commands).every(key => commands[key] === event.type));
        
    var ioAdapter = {};
    Object.keys(events).map(key => ioAdapter[key] = actionDispatcher(makeCommand(events[key])));
    ioAdapter.subscribe = func => ioStream.subscribe(func);
    return ioAdapter;
};

export default adapter;
