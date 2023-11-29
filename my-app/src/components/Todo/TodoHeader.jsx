import React, { useEffect, useState } from 'react';
import MyButton from '../../assets/UI/button/MyButton';
import MyInput from '../../assets/UI/input/MyInput';
import TodoList from './TodoList';

const TodoHeader = () => {

    const [newTask, setNewTask] = useState('')
    const [allTask, setAllTask] = useState([])
    const [oldTask, setOldTask] = useState([])


    const addTask = (e) => {
        e.preventDefault()
        if (newTask !== '') {
            setAllTask([...allTask, newTask])
            setNewTask('')
            setOldTask([...allTask, newTask])

        }
    }


    function searchTask(e) {
        if (e.target.value !== '') {
            let result = allTask.filter((item) => item.toLowerCase().includes(e.target.value))
            setAllTask([...result])
        } else {
            setAllTask([...oldTask])
        }
    }


    function removeTask(index) {
        let result = [...allTask.slice(0, index), ...allTask.slice(index + 1, allTask.length)]
        setAllTask([...result])
    }

    return (
        <>
            <form className="input-section">
                <MyInput onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder="Добавить..." />
                <MyButton onClick={addTask}>Добавить</MyButton>

                <MyInput onChange={searchTask} placeholder="Поиск" />
            </form>
            <TodoList allTask={allTask} remove = {removeTask}/>
        </>

    );
}

export default TodoHeader;
