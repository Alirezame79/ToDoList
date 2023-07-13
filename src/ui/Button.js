import React from "react";
import classes from './Button.module.css';

export default function Button({ children, update, onClick }) {
    let btnclass = classes.btn;
    if (update) btnclass = btnclass + ' ' + classes.updateBtn;

    return (
        <button className={btnclass} onClick={onClick}>{children}</button>
    );
}