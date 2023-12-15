import React from 'react';
import classes from './style/myBytton.module.css';

const MyButton = (props) => {
    return (
        <button {...props} className={classes.myBtn}>
            {props.children}
        </button>
    );
}

export default MyButton;
