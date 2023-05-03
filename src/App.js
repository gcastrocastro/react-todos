import './App.css';
import ToDoList from './ToDoList';

const todos = [
  'have fun',
  'learn react', 
  'learn MERN stack'
];

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList todos={todos}/>
    </div>
  );
}
