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

  function handleData(deletedData) {
    const updatedData = tasks.filter(
      (task) => task.id !== deletedData.id
    );
    setTasks(updatedData);
  }

  return (
    <>
    {tasks.map((task) =>(
      <Task key={task.id} task={task}  onToggle={toggleReminder}  onDelete={handleData}/>
      ))}
    </>
  )
}