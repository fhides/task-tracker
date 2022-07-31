import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  const{text, day, reminder} = task;

  function deleteData() {
    fetch(`https://field-languid-crater.glitch.me/data/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => onDelete(task));
  }

  return (
    <div className={`task ${reminder? 'reminder': ''}`} 
    onDoubleClick={() => onToggle(task.id)}>
        <h3>{text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={deleteData}/>
        </h3>
        <p>{day}</p>
        </div>
  )
}

export default Task