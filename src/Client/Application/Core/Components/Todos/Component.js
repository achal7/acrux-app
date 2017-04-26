import React from 'react';
import TodosList from './TodosList.jsx';
import {getAll} from './Actions';
import SplitPane from './SplitPane.jsx';
import TodosCategory from './TodosCategory.jsx';

const Todos = todos => React.createClass({
    render() {
        return (
            <TodosList todos = {todos} />
        );
    }
});

const RxTodos = todos => React.createClass({
    getInitialState () {
        return {
            todos: todos
        };
    },

    incomming(todos){
        this.setState({todos: todos});
    },

    render() {
        return (
            <SplitPane
                left={
                    <TodosCategory categories = {[{title:'React'}]} />
                }
                right={
                    <TodosList todos = {this.state.todos} />
                } />            
        );
    }
});

const CreateRxTodos = todos => React.createClass({
    getInitialState () {
        return {
            todos: todos
        };
    },

    incomming(todos){
        this.setState({todos: todos});
    },

    render() {
        return (
            <TodosList todos = {this.state.todos} />
        );
    }
});

const module = {
    TodosList : TodosList,
    Todos: Todos,
    TodosWithDefault: RxTodos(getAll())
};

export default module;