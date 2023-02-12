import React, { useState, useEffect } from 'react'
import { getAllTasks, tasks } from '../apis/testApi'

const TaskScreen = () =>{
    const [allTasks,setAllTasks]= useState([])
    const [count,setcount]= useState(0)

    useEffect(() => {
        console.log("Hello")
        getAllTasks().then((foundTasks) => setAllTasks(foundTasks))
    },[]);
    useEffect(() => {
        console.log("TaskScreen Mounted")
    });

    return tasks.map((task,index) =>(
        <div key={index} onClick={(e) => setcount(count+1)}>
            <h1>
                {task.taskNumber} {task.taskName}
            </h1>
            <p>{task.taskDescription}</p>
        </div>
    ))
}

export default TaskScreen;