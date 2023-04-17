import React from "react";
import "bulma/css/bulma.css";
import { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task ,onDelete, onUpdate}) => {
    const [showEdit, setShowEdit] = useState(false);
    
    const handleDelete = ()=>{
        onDelete(task.id)
    }
    const showUpdateForm = ()=>{
        setShowEdit(!showEdit)
    }
    const handleSubmit= (id,title,taskDesc)=>{
        setShowEdit(false)
        onUpdate(id,title,taskDesc)

    }
  return (
    <div className="tasks-style">
    {showEdit ? <TaskCreate task={task} editShowForm={true} onNewCreate={handleSubmit}/> :
    <>
      <form>
        <h1 className="is-size-5  has-text-weight-semibold has-text-black-ter">
          Görevimiz
        </h1>

        <label className="label ">Title</label>
        <p>{task.title}</p>

        <label className="label">Task</label>
        <p>{task.taskDesc}</p>
      </form>
      <button onClick={handleDelete} className="button is-danger mt-3 has-text-white has-text-weight-semibold">
        Delete
      </button>
      <button onClick={showUpdateForm} className="button is-info mt-3 has-text-white has-text-weight-semibold ml-3">
        Update
      </button>
    </>}
    </div>

  );
};

export default TaskShow;
