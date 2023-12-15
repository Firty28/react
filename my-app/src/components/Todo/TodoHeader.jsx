import React, { useEffect, useState } from 'react';
import MyButton from '../../assets/UI/button/MyButton';
import MyInput from '../../assets/UI/input/MyInput';
import TodoList from './TodoList';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, searchTodo } from '../../store/slice/todoSlice.js';
import store from '../../store/store.js';

const TodoHeader = () => {

    const count = useSelector(state => state.value)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log('awdawdwwww');
        });
    },[])

    function addTodoFunc(e){
        e.preventDefault()
        if (inputValue.trim() !== '') {
            dispatch(addTodo(inputValue))
            setInputValue('')
        }
        
    }

    return (
        <>
            <form className="input-section">
                <MyInput onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="Добавить..." />
                <MyButton onClick={(e) => addTodoFunc(e)}>Добавить</MyButton>

                <MyInput onChange={(e) => dispatch(searchTodo(e.target.value))} placeholder="Поиск" />
            </form>
            <TodoList allTask={count}/>
        </>

    );
}

export default TodoHeader;
