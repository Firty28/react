import React from 'react';
import Task from './Task';

const TodoList = ({ allTask }) => {



    return (

            <div className='todos'>
                <ul className="todo-list">
                    {allTask.map((item, index) => (
                        <Task name={item} index={index}/>
                    ))}
                </ul>
            </div>
    );
}

export default TodoList;
