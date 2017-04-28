import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import TodoListIOAdapter from './TodoListIOAdapter';
import {getAll} from './Actions';
import SplitPane from './SplitPane.jsx';
import TodosCategory from './TodosCategory.jsx';

const action$ = new Subject();
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

var source = Rx.Observable.timer(2000, 1000)
    .timeInterval()
    .pluck('interval')
    .take(3);

source.subscribe(x=> action$.next({type:'timer'}));

const store$ = action$  
    .startWith(initState)
    .scan(reducer);

const actionDispatcher = (func) => (...args) =>  
  action$.next(func(...args));
 
const refresh = actionDispatcher(payload => ({  
  type: 'refresh',
  payload
}));

// const Todos = todos => React.createClass({
//     render() {
//         return (
//             <TodosList todos = {todos} />
//         );
//     }
// });


// const RxTodos = todos => React.createClass({
//     getInitialState () {
//         return {
//             todos: todos
//         };
//     },

//     incomming(todos){
//         this.setState({todos: todos});
//     },

//     render() {
//         return (
//             <SplitPane
//                 left={
//                     <TodosCategory categories = {[{title:'React'}]} />
//                 }
//                 right={
//                     <TodosList todos = {this.state.todos} />
//                 } />            
//         );
//     }
// });

// const CreateRxTodos = todos => React.createClass({
//     getInitialState () {
//         return {
//             todos: todos
//         };
//     },

//     incomming(todos){
//         this.setState({todos: todos});
//     },

//     render() {
//         return (
//             <TodosList todos = {this.state.todos} />
//         );
//     }
// });

const actions = {
    refresh: refresh
};
const make = ( stream, actions ) => <TodoListIOAdapter stream={stream} actions={actions} /> 

const module = {
    //TodosList : TodosList,
    //Todos: Todos,
    //TodosWithDefault: RxTodos(getAll()),
    TodoComponent: TodoListIOAdapter,
    TodosWithDefault: () => make(store$, actions), //Todos(getAll())
};

export default module;