import React from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskListContextProvider from "../context/TaskListContext";
import "../App.css";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
