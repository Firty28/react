import React, { useState } from 'react';


const Task = ({ item, index }) => {



    function getChecked(){
        if (checked === '') {
            setCheked('checked')
        } else if (checked === 'checked'){
            setCheked('')
        }
    }


    return (
        <li key={index} className={checked} onClick={getChecked}>
            {item}
            <button onClick={() => useDispatch(removeTodo())} className="close">Удалить</button>
        </li>
    );
}

export default Task;
