import React, { useState } from 'react';
import MyInput from '../../assets/UI/input/MyInput';
import MyButton from '../../assets/UI/button/MyButton';

const Task = ({ name, index, removeFunction }) => {

    const [date, setDate] = useState(new Date());

    let formatDate = date.toLocaleDateString();
    let formatTime = date.toLocaleTimeString();


    function collbackRemove(e){
        e.preventDefault()
        removeFunction(index)
    }

    return (
        <li key = {index} className="li">
            <MyInput type="checkbox" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
            <span className="todo-text name-text">{name}</span>
            <span className="todo-text">{formatTime}</span>
            <span className="todo-text">{formatDate}</span>
            <MyButton onClick={collbackRemove} >Remove</MyButton>
         

        </li>
    );
}

export default Task;
