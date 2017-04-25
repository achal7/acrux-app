import React, { Component } from 'react';
import TodosList from './TodosList.jsx';
import {getAll} from './Actions';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';

const action$ = new Subject();
const initState = getAll();

const reducer = (state, action) => {  
  switch(action.type) {
    case 'refresh':
      return {
        todos: [...state, {title:'one more', description:'sample..'}]
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
    .take(30);

source.subscribe(x=> action$.next({type:'timer'}));

const store$ = action$  
    .startWith(initState)
    .scan(reducer);

const actionDispatcher = (func) => (...args) =>  
  action$.next(func(...args));

const refresh = actionDispatcher((payload) => ({  
  type: 'refresh',
  payload
}));

const Todos = todos => React.createClass({
    render() {
        return (
            <TodosList todos = {todos} />
        );
    }
});

const actions = {
    refresh: refresh
};
const make = ( stream, actions ) => <TodoComponent stream={stream} actions={actions} /> 

class TodoComponent extends Component {
    state = { todos: [] }
    constructor(props){
        super(props);
    }
    componentWillMount() {
        this.subscription = this.props.stream.subscribe(state => this.setState(state));
    }
    
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    
    render() {
        return (
            <div>
                <button value="Refresh" onClick={() => {this.props.actions.refresh('force')}}>Refresh</button> 
                <TodosList todos={this.state.todos} />
            </div>            
        );
    }
}

const module = {
    TodosList : TodosList,
    Todos: Todos,
    TodoComponent: TodoComponent,
    TodosWithDefault: () => make(store$, actions), //Todos(getAll())
};

export default module;