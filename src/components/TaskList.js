import React from 'react'
import "bulma/css/bulma.css";
import TaskShow from './TaskShow';


const TaskList = ({tasks,onDelete,onUpdate}) => {
  return (
    <div  className="task-item">
        {
            tasks.map((task,index)=>{
                return <TaskShow key={index} task={task} onDelete={onDelete} onUpdate={onUpdate}/>;
            })
        }

    </div>
  )
}

export default TaskList