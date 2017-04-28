import {getAll} from './Actions';

const initState = getAll();
const reducer = (state, action) => {
    return state;
//   switch(action.type) {
//     case 'refresh':
//       return {
//         todos: [...state, ...action.payload, {title:'one more', description:'sample..'}]
//       };
//     case 'timer':
//         return{
//             todos: [...initState, {title:new Date().getTime(), description: 'from timer...'}]
//         };
//     default:
//       return state;
//   }
}

const streamActionDispatcher = stream => (func) => (...args) => stream.next(func(...args));

const adapter = stream => {

    const actionDispatcher = streamActionDispatcher(stream);
    const refresh = actionDispatcher(payload => ({  
        type: 'doRefresh',
        payload
    }));

    const ioStream = stream  
        .startWith(getAll())
        .filter(x => x.type==='refresh')
        .scan(reducer);
    //ioStream.subscribe( x=> console.log('I/O: ', (new Date()).toLocaleTimeString(), x));
    return {
        refresh: refresh,
        subscribe: func => ioStream.subscribe(func)
    };
};

export default adapter;
