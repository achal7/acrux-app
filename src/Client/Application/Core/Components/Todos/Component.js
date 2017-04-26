import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject';
import Rx from 'rxjs';
import TodoComponent from './TodoComponent';
import TodoAdapter from './IOAdapter';

const make = actions => <TodoComponent actions={actions} /> 
const action$ = new Subject();
const ioActions = TodoAdapter(action$);

var source = Rx.Observable.timer(2000, 300)
    .timeInterval()
    .pluck('interval')
    .take(50);

source.subscribe(x=> action$.next({type:'timer'}));
var d = new Date();
var s1 = action$.subscribe( x=> console.log("A: ", d.toLocaleTimeString()));
var s2 = action$.subscribe( x=> console.log("B: ", d.toLocaleTimeString()));

const module = {
    TodoList: () => make(ioActions)
};

export default module;