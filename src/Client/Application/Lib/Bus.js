const messageFilter = registry => message => registry.find( entry => entry.name === message.name);
const messageAggregator = (message, action) => ({...message, ...action});

const bus = (stream, commands, filter) => {
  const search = messageFilter(commands);  
  filter = typeof filter === 'function' ? filter : command => command !== undefined;
  return stream
        .map(message => messageAggregator(message, search(message)))
        .filter(command => filter(command));
};

export default bus;