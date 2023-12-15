import React, { useState } from 'react';
import MyInput from '../../assets/UI/input/MyInput';
import MyButton from '../../assets/UI/button/MyButton';
import { useDispatch } from 'react-redux'
import { removeTodo } from '../../store/slice/todoSlice.js';

const Task = ({ name, index }) => {

    const dispatch = useDispatch()

    const [date] = useState(new Date());

    let formatDate = date.toLocaleDateString();
    let formatTime = date.toLocaleTimeString();


    function collbackRemove(e){
        e.preventDefault()
        dispatch(removeTodo(index))
    }

    return (
        <li key = {index} className="li">
            <MyInput type="checkbox" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
            <span className="todo-text name-text">{name}</span>
            <span className="todo-text">{formatTime}</span>
            <span className="todo-text">{formatDate}</span>
            <MyButton onClick={(e) => collbackRemove(e)} >Remove</MyButton>
         

        </li>
    );
}

export default Task;
