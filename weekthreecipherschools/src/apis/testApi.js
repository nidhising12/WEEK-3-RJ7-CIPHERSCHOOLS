export const testAPI = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 15000);
    })
}




export let tasks=[
    {
        taskNumber:1,
        taskName: "Task 1",
        taskDescription:" This is task 1",
    },
    {
        taskNumber:2,
        taskName: "Task 2",
        taskDescription:" This is task 2",
    },
    {
        taskNumber:3,
        taskName: "Task 3",
        taskDescription:" This is task 3",
    },

    {
        taskNumber:4,
        taskName: "Task 4",
        taskDescription:" This is task 4",
    },

    {
        taskNumber:5,
        taskName: "Task 5",
        taskDescription:" This is task 5",
    },
]

export const getAllTasks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(tasks);
        }, 3000);
    })
}
