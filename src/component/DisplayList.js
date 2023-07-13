import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Task from "../ui/Task";
import classes from './DisplayList.module.css';

export default function DisplayList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/all')
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                setList(data.map((item) => {
                    return (
                        <Card todo key={item.ID} >
                            <Task task={item} />
                        </Card>
                    )
                }));
            })
    }, []);


    let result;
    if (list.length === 0) {
        result = "List is empty!";
    } else {
        result = list;
    }

    return (
        <>
            <div className={classes.header}>
                <h2 className={classes.title}>Tasks List</h2>
                {/* <Button update onClick={updateList}>Update</Button> */}
            </div>
            <div className={classes.body}>
                {result}
            </div>

        </>
    );
}