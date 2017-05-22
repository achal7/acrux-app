import Refresh from './Actions/Refresh';

const reducer = (state, action) => {  
  switch(action.type) {
    case 'DoRefresh':
      return {
        type: 'refresh',
        todos: Refresh() };
  }
}

const process = (stream, action ) => {  
  console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), action);
  switch(action.type) {
    case 'DoRefresh':{
      const reply = {
        type: 'refresh',
        todos: Refresh() };
      stream.next(reply);
    }
  }
};

const ActionsChipset = stream => {
  const ioStream = stream  
        .filter(x => x.type === 'DoRefresh');
  //var log = ioStream.subscribe( x=> console.log('CHIPSET: ', (new Date()).toLocaleTimeString(), x));
  ioStream.subscribe(x=> process(stream,x));
};

export default ActionsChipset;
