const tasks = {
    tasks: [
    {
        text: 'Grocery Shopping',
        completed: true
    },
    {
        text: 'Clean Yard',
        completed: false
    },
    {
        text: 'Film Course',
        completed: false
    }
],
getTasksToDo(){
    return this.tasks.filter((task)=> task.completed !== true)
}
}

console.log(tasks.getTasksToDo())