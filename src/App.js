import "bulma/css/bulma.css";
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])
  const handleSubmit = (title,taskDesc)=>{
    const tasksArray = [...tasks,{
        id : Math.round(Math.random()*999999),
        title,
        taskDesc

    }]
    setTasks(tasksArray)
  }
  const handleDeleted=(id)=>{
    setTasks(tasks.filter((task)=>{
      return task.id!==id
    }))
    

  }
  const handleTaskEdit=(id,editTitle,editTaskDesc)=>{
    const updatedTasks=tasks.map((task)=>{
      if(task.id===id){
        return {id:id,title:editTitle,taskDesc:editTaskDesc}
      }
      return task; 
    })
    setTasks(updatedTasks)

  }
  


  return (
    <div className="App">
        <TaskCreate onCreate={handleSubmit}/>
        <h1 className="is-size-2 is-flex is-justify-content-center">Görevler</h1>
        <TaskList tasks={tasks} onDelete={handleDeleted} onUpdate={handleTaskEdit}/>
    </div>
  );
}

export default App;
