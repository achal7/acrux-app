import {getAll} from './Actions';

const initState = getAll();
const reducer = (state, action) => {  
  switch(action.type) {
    case 'refresh':
      return {
        todos: [...state, ...action.payload, {title:'one more', description:'sample..'}]
      };
    case 'timer':
        return{
            todos: [...initState, {title:new Date().getTime(), description: 'from timer...'}]
        };
    default:
      return state;
  }
}

const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));

const adapter = stream => {

    const actionDispatcher = streamActionDispatcher(stream);
    const refresh = actionDispatcher(payload => ({  
        type: 'refresh',
        payload
    }));

    const ioStream = stream  
        .startWith(getAll())
        .scan(reducer);

    return {
        refresh: refresh,
        subscribe: func => ioStream.subscribe(func)
    };
};

export default adapter;
