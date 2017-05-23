const process = (stream, command ) => {  
  //console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), command);
  command.action(stream);
};

const processor = (stream, commands) => {
  const ioStream = stream  
        .map(event => commands.find( command => command.name === event.name))
        .filter(command => command != undefined);
  ioStream.subscribe(command => process(stream,command));
  return {
    stream: ioStream,
    addCommand: command => commands.push(command)
  }
};

export default processor;
