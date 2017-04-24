import React from 'react';
import TodosList from './TodosList.jsx';
import {getAll} from './Actions';

const Todos = todos => React.createClass({
    render() {
        return (
            <TodosList todos = {todos} />
        );
    }
});

const module = {
    TodosList : TodosList,
    Todos: Todos,
    TodosWithDefault: Todos(getAll())
};

export default module;