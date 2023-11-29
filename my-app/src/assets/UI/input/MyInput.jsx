import React from 'react';
import clasess from './style/myInput.module.css';

const MyInput = (props) => {
    return (
        <input {...props} className={clasess.myInput}/>
    );
}

export default MyInput;
