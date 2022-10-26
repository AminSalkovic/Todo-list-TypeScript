import React,{ChangeEvent, FC,useState} from 'react';
import './App.css';
import{ITask} from './interfaces/Interfaces'

const App: FC =()=> {
  
  const [task,setTask] = useState<string>('')
  const[deadline,setDeadline]=useState<number>(0)
  const[todo,setTodo]=useState<ITask[]>([])
  
  const handleChange=(event: ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.value==='task'){
      setTask(event.target.value)
      console.log(task);
      
    }else{
      setDeadline(Number(event.target.value))
    }
  }
  const addTask=():void=>{
      const newTask={taskName:task,deadline:deadline}
        setTodo([...todo,newTask])
        console.log(todo);
        
  }
  return (
    <div className="App">
       <div className="header">
        <div className="inputContainer">
        <input type="text" placeholder='task...' name='task' onChange={handleChange}/>
        <input type="number" placeholder='Deadline..' name='deadline' />
        </div>
        <button onClick={addTask}>add task</button>
       </div>
       <div className="todoList"></div>
    </div>
  );
}

export default App;
