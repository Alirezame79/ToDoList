import { createContext, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
    const [taskList, setTaskList] = useState([]);

    const valueToShare = {
        taskList: taskList,
        getAllTasks: () => {
            fetch('http://127.0.0.1:5000/all')
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    setTaskList(data);
                })
        },
        addNewTask: (newTask) => {
            fetch('http://127.0.0.1:5000/add', {
                method: 'POST',
                body: JSON.stringify(newTask),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                return response.json;
            }).then((data) => {
                console.log("send new task " + data);
            });
            setTaskList(current => [...current, newTask]);
        }
    }

    return (
        <TasksContext.Provider value={valueToShare}>
            {children}
        </TasksContext.Provider>
    )
}

export { Provider };
export default TasksContext;