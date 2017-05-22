import React from 'react';
import Todo from './Todo';

const TodosList = (props) => {
    const { todos } = {...props} || [{title:'default', description:''}];
    return (
        <div className="Todos">
            <h2>Todos</h2>
            <ul>
            {
                todos.map((todo, i)=> {
                    return(
                        <li key={i}><Todo todo={todo} /></li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default TodosList;