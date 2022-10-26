import React from 'react'
import {ITask} from '../interfaces/Interfaces'
interface Props{
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}
const TodoTask = ({task,completeTask}:Props) => {
  return (
    <div className="task">
        <div className="content">
         <span>{task.taskName}</span>
         <span>{task.deadline}</span>

        </div>
        <button onClick={()=>completeTask(task.taskName)}>x</button>
    </div>
  )
}

export default TodoTask