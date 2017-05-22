import React from 'react';

const TodosCategoryList = (props) => {
    const { categories } = {...props} || [{title:'React'}];
    return (
        <div className="TodoCategories">
            <h2>Category</h2>
            <ul>
            {
                categories.map((category, i)=> {
                    return(
                        <li key={i}>category</li>
                    )
                })
            }
            </ul>
        </div>
    );
};

export default TodosCategoryList;