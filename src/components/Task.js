import React from 'react';
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  const{text, day, reminder} = task;

  function deleteData() {
    fetch(`http://localhost:3000/data/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => onDelete(task));
  }