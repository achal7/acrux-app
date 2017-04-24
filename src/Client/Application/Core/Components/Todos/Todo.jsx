import React from 'react';

const Todo = props => {
    const {todo} = {...props}
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
        </div>
    );
};

export default Todo;