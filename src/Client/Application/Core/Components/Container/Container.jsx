import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Module} from 'react-router-server';
import Home from './../Home';
import About from './AboutLoader';
import Topics from './../Topics/TopicsList';
import OrderModuleLoader from './OrderModuleLoader';
import Weather from './WeatherModuleLoader';
import Counter from './../Counter';
import Name from './../NameContainer';
import TodosModule from './../Todos/Component';

const Container = () => (
    <div>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/counter" component={Counter}/>
        <Route path="/name" component={Name}/>
        <Route path="/todos" component={TodosModule.TodosWithDefault}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/weather" component={Weather}/>
        <Route path="/orders" component={OrderModuleLoader}/>
    </div>
);

export default Container;