import ToDoListItem from './ToDoListItem';
import './ToDoList.css';

export default function ToDoList(props) {
    //generate a list of TodoListItem components for each string inside of props.todo
    const todoListItems = props.todos.map(function(todoStr, index) {
        return <ToDoListItem todo= {todoStr} index={index} key={todoStr}/>;
    })
    
    return(
        <ul className="ToDoList">
            {todoListItems}
        </ul>
    );
}