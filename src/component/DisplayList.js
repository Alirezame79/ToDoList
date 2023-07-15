import React, { useEffect } from "react";
import Card from "../ui/Card";
import Task from "../ui/Task";
import classes from './DisplayList.module.css';
import TaskHook from "../context/TaskHook";
import Button from "../ui/Button";

export default function DisplayList() {
    const { taskList, getAllTasks } = TaskHook();

    useEffect(() => {
        getAllTasks()
    }, []);

    function updateList() {
        getAllTasks()
    }


    let result;
    if (taskList.length === 0) {
        result = "List is empty!";
    } else {
        result = taskList.map((item) => {
            return (
                <Card todo key={item.ID} >
                    <Task task={item} />
                </Card>)
        })
    }

    return (
        <>
            <div className={classes.header}>
                <h2 className={classes.title}>Tasks List</h2>
                <Button update onClick={updateList}>Update</Button>
            </div>
            <div className={classes.body}>
                {result}
            </div>

        </>
    );
}