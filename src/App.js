import {useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState();
  

  const switchButton =() =>{
    setShowAddTask(showAddTask => !showAddTask)
  }

  return (
    <div className="container">
      <h1>task tracker</h1>
      <Header
        switchButton={switchButton}
        showAdd={showAddTask}
      />
      {showAddTask? <AddTask  /> : null}
        <Tasks />
    </div>
  );
}

export default App;
