import React from "react";
import classes from './Input.module.css';

export default function Input({ wide, innerRef }) {

    let inputClass = classes.input;
    if (wide) inputClass = inputClass + ' ' + classes.bodyInput

    return (
        <input className={inputClass} ref={innerRef} />
    );
}