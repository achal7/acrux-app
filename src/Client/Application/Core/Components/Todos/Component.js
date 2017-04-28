import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
<<<<<<< HEAD
import TodoListIOAdapter from './TodoListIOAdapter';
import {getAll} from './Actions';
import SplitPane from './SplitPane.jsx';
import TodosCategory from './TodosCategory.jsx';
=======
import TodoComponent from './TodoComponent';
import TodoAdapter from './IOAdapter';
>>>>>>> f9efbd957eade68fe782ef8d01734ce49a565988

const make = actions => <TodoComponent actions={actions} /> 
const action$ = new Subject();
const ioActions = TodoAdapter(action$);

var source = Rx.Observable.timer(2000, 300)
    .timeInterval()
    .pluck('interval')
    .take(50);

source.subscribe(x=> action$.next({type:'timer'}));
<<<<<<< HEAD

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
=======
var d = new Date();
var s1 = action$.subscribe( x=> console.log("A: ", d.toLocaleTimeString()));
var s2 = action$.subscribe( x=> console.log("B: ", d.toLocaleTimeString()));

const module = {
    TodoList: () => make(ioActions)
>>>>>>> f9efbd957eade68fe782ef8d01734ce49a565988
};

export default module;