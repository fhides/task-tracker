import React,{ useState, useEffect} from 'react';
import Task from './Task'

const Tasks = ({onDelete,onToggle }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data")
          .then((r) => r.json())
          .then((data) => {
            setTasks(data);
          });
      }, [tasks])

      // click reminder
   const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };