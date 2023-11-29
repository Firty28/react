import React, { useState } from 'react';

const Task = ({ item, index, removeTaskF }) => {

    const [checked, setCheked] = useState('')

    function getChecked(){
        console.log(item);
        if (checked === '') {
            setCheked('checked')
        } else if (checked === 'checked'){
            setCheked('')
        }
    }


    return (
        <li key={index} className={checked} onClick={getChecked}>
            {item}
            <button onClick={() => removeTaskF(index)} className="close">Удалить</button>
        </li>
    );
}

export default Task;
