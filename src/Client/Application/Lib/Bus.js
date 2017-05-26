const messageFilter = registry => message => registry.find( entry => entry.name === message.name);
const messageAggregator = (message, action) => ({...message, ...action});

const bus = (stream, commands) => {
  const filter = messageFilter(commands);  
  return stream
        .map(message => messageAggregator(message, filter(message)))
        .filter(command => command.action != undefined);
};

export default bus;