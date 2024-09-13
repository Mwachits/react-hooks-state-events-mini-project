import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map(task => ( 
        <Task 
          key={task.id}
          task={task} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;
