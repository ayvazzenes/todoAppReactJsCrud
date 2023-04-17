import React from "react";
import "bulma/css/bulma.css";
import { useState } from "react";

const TaskCreate = ({ onCreate, task, editShowForm,onNewCreate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleCreate = (e) => {
    e.preventDefault();

    
    if(editShowForm){
        onNewCreate(task.id,title,taskDesc)
    }else{
        onCreate(title, taskDesc);
    }
    
    setTitle("");
    setTaskDesc("");
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskDesc = (e) => {
    setTaskDesc(e.target.value);
  };
  return (
    <>
      {editShowForm ? (
        <div className="taskForm">
          <h1 className="is-size-4 is-flex is-justify-content-center has-text-weight-semibold has-text-black-ter">
            Düzenleyiniz
          </h1>
          <form>
            <div className="field">
              <label className="label">Title Düzenleyin</label>
              <input
                value={title}
                onChange={handleTitle}
                className="input"
                type="text"
                placeholder="Title input"
              />
            </div>

            <div className="field">
              <label className="label">Task Düzenleyin</label>
              <div className="control">
                <textarea
                  value={taskDesc}
                  onChange={handleTaskDesc}
                  className="textarea"
                  placeholder="Task"
                />
              </div>
            </div>
          </form>
          <button
            onClick={handleCreate}
            className="button is-danger mt-3 has-text-white has-text-weight-semibold"
          >
            Düzenle
          </button>
        </div>
      ) : (
        <div className="taskForm">
          <h1 className="is-size-4 is-flex is-justify-content-center has-text-weight-semibold has-text-black-ter">
            Ne Yapıyorsunuz?
          </h1>
          <form>
            <div className="field">
              <label className="label">Title</label>
              <input
                value={title}
                onChange={handleTitle}
                className="input"
                type="text"
                placeholder="Title input"
              />
            </div>

            <div className="field">
              <label className="label">Task</label>
              <div className="control">
                <textarea
                  value={taskDesc}
                  onChange={handleTaskDesc}
                  className="textarea"
                  placeholder="Task"
                />
              </div>
            </div>
          </form>
          <button
            onClick={handleCreate}
            className="button is-danger mt-3 has-text-white has-text-weight-semibold"
          >
            Create Task
          </button>
        </div>
      )}
    </>
  );
};

export default TaskCreate;
