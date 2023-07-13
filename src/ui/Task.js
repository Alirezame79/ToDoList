import React from "react";
import classes from './Task.module.css';

export default function Task({ task }) {

    return (
        <div className={classes.container}>
            <h3 className={classes.creator}>{task.Creator} :</h3>
            <h4 className={classes.body}>{task.Body}</h4>
        </div>
    );
}
