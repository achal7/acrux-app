import PrepareCommand from './PrepareCommand';

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
    Object.keys(events).map(key => ioAdapter[key] = actionDispatcher(PrepareCommand(events[key])));
    ioAdapter.subscribe = func => ioStream.subscribe(func);
    return ioAdapter;
};

export default adapter;
