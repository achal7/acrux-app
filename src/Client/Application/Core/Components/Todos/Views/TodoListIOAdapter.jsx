import TodosListComponent from './TodosListComponent';
import {getAll} from './Actions';

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
};
export default reducer;
// const adapter = stream => {
//     return stream  
//             .startWith(getAll())
//             .scan(reducer);
// };

// export default adapter;
