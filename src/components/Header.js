import React from "react";

const Header = ({switchButton,showAddTask}) => {
  return (
    <header className="header">
      <h1>Tasks Tracker</h1>
    <button className='btn' onClick={switchButton}>{showAddTask? "Close" : "Add"}</button>
    </header>
  );
};


export default Header;
