const messageFilter = registry => message => registry.find( process => process.name === message.name);
const messageAggregator = (message, action) => ({...message, ...action});

const processBus = (stream, commands) => {
  const filter = messageFilter(commands);  
  return stream
        .map(message => messageAggregator(message, filter(message)))
        .filter(command => command.action != undefined);
};

export default processBus;