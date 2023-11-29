import React from 'react';
import Task from './Task';

const TodoList = ({ allTask, remove }) => {



    return (

            <div className='todos'>
                <ul className="todo-list">
                    {allTask.map((item, index) => (
                        <Task name={item} index={index} removeFunction={remove} />
                    ))}
                </ul>
            </div>
    );
}

export default TodoList;
