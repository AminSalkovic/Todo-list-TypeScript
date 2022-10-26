import React,{ChangeEvent, FC,useState} from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import{ITask} from './interfaces/Interfaces'

const App: FC =()=> {
  
  const [task,setTask] = useState<string>('')
  const[deadline,setDeadline]=useState<number>(0)
  const[todo,setTodo]=useState<ITask[]>([])
  
  const handleChange=(event: ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.value==='task'){
      setTask(event.target.value)
    }else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTask=():void=>{
      const newTask={taskName:task,deadline:deadline}
        setTodo([...todo,newTask])
        setTask('')
        setDeadline(0)
        console.log(todo);
  }
  const completeTask=(taskNameToDelete:string):void=>{
     setTodo(todo.filter((task)=>{
      return task.taskName = taskNameToDelete
     }))
  }
  return (
    <div className="App">
       <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder='task...' 
         value={task}
        name='task' onChange={handleChange}/>
        <input type="number" placeholder='Deadline..' 
          name='deadline' 
          value={deadline}
        />
        </div>
        <button onClick={addTask}>add task</button>
       </div>
       <div className="todoList">
        
        {todo.map((task:ITask,key:number)=>{
             return <TodoTask key={key} 
             completeTask={completeTask}
             task={task}/>
          })}
       </div>
    </div>
  );
}

export default App;
