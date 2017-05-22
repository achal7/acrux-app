const reducer = (state, action) => {  
  // switch(action.type) {
  //   case 'DoRefresh':
  //     return {
  //       type: 'refresh',
  //       todos: Refresh() };
  // }
  
}

const process = (stream, command ) => {  
  console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), command);
  if(command){
    const reply = {
      type: command.triggerEvent,
      todos: command.action()
    };
    stream.next(reply);
  }
};

const ActionsChipset = (stream, commands) => {
  const ioStream = stream  
        .map(event => commands.find( command => command.responseOfEvent === event.type))
        .filter(command => command != undefined);
  //var log = ioStream.subscribe( x=> console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), x));
  ioStream.subscribe(command => process(stream,command));
  return {
    stream: ioStream,
    addCommand: command => commands.push(command)
  }
};

export default ActionsChipset;
