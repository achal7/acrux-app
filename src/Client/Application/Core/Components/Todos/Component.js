import React from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import TodoComponent from './TodoComponent';
import ViewAdapter from './ViewAdapter';
import ActionsChipset from './ActionsChipset';

const make = actions => <TodoComponent actions={actions} /> 
const action$ = new Subject();
action$.subscribe( x=> console.log('BUS: ', (new Date()).toLocaleTimeString(), x));
const events = ['DoRefresh'];
const commands = ['refresh'];
const ioActions = ViewAdapter(action$, events, commands);
ActionsChipset(action$);

// var source = Rx.Observable.timer(2000, 300)
//     .timeInterval()
//     .pluck('interval')
//     .take(50);

// source.subscribe(x=> action$.next({type:'timer'}));

// var d = new Date();
// var s1 = action$.subscribe( x=> console.log("A: ", d.toLocaleTimeString()));
// var s2 = action$.subscribe( x=> console.log("B: ", d.toLocaleTimeString()));

const module = {
    TodoList: () => make(ioActions)
};

export default module;