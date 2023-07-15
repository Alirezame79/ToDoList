import TasksContext from "../context/TasksContext";
import { useContext } from "react";

export default function TaskHook() {
    const { taskList, getAllTasks, addNewTask } = useContext(TasksContext);

    return { taskList, getAllTasks, addNewTask };
}
