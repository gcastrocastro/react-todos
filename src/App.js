import './App.css';
import ToDoList from './ToDoList';
import {useState} from 'react';
import NewToDoForm from './NewToDoForm';

// const todos = [
//   'have fun',
//   'learn react', 
//   'learn MERN stack'
// ];

export default function App() {
  //const[currentState, setState] = useState(defaultState)
    const [showTodos, setShowTodos] = useState(true);
	  const [todos, setTodos] = useState([
	    "Have Fun",
	    "Learn React",
	    "Learn the MERN-Stack"
	  ]);
  return (
    <div className="App">
      <h1>React To-Do</h1>
      {/* Conditionally render ToDoList */}
      <button onClick={() => setShowTodos(!showTodos)} >Hide</button>
      {showTodos && <ToDoList todos={todos} />}
      <hr/>
      <NewToDoForm />
    </div>
  );
}
