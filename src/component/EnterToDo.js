import { useRef, useState } from 'react';
import classes from './EnterToDo.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';
import TaskHook from "../context/TaskHook";


export default function EnterToDo() {
    const [alertTxt, setAlertTxt] = useState('');
    const nameElement = useRef('');
    const taskBodyElement = useRef('');
    const { getAllTasks, addNewTask } = TaskHook();

    function submitTodo() {
        if (nameElement.current.value === "" || taskBodyElement.current.value === "") {
            setAlertTxt("Fill the inputs!")
            return;
        }

        setAlertTxt("");
        let task = {
            'name': nameElement.current.value,
            'body': taskBodyElement.current.value
        }
        addNewTask(task);
        getAllTasks();
        nameElement.current.value = '';
        taskBodyElement.current.value = '';
    }

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Add new Task</h2>
            <>
                <label className={classes.labels} htmlFor='name'>Name</label>
                <Input id='name' innerRef={nameElement} type={'text'} />
            </>
            <>
                <label className={classes.labels} htmlFor='body'>Body</label>
                <Input wide id='body' innerRef={taskBodyElement} type={'text'} />
            </>
            <Button onClick={submitTodo}>Submit</Button>
            <h4 className={classes.alertTxt}>{alertTxt}</h4>
        </div>
    );
}