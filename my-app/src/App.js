import React from "react";
import './style/App.css'
import TodoHeader from "./components/Todo/TodoHeader";

function App() {
  
  return (
    <div className="App">
      <div className="todo-app">
        <TodoHeader />
      </div>
    </div>
  );
}

export default App;

