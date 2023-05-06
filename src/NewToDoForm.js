import {useState} from 'react';

export default function NewToDoForm({setTodos}) {
    const [newToDo, setNewToDo] = useState('');

    //separate helper function to set To-Do
    const handleChange = (event) => {
        setNewToDo(event.target.value);
    }
    
    const handleAddToDo = (event) => {
        //prevents browser from refreshing page
        event.preventDefault();

        //setTodos(newToDo); //if you were to do this, it would replace ALL the previous state with the new state.

        //this ADDS to the previous state
        setTodos(function(previousTodosArray) {
            return [...previousTodosArray, newToDo];
        });
        // clears input value
        setNewToDo('');
    }

    return (
        <>
        <h2>New To Do</h2>
        <form onSubmit={handleAddToDo}>
            <input 
                value={newToDo} 
                onChange={handleChange}
                type="text" 
                placeholder="New To-Do"
                required
                pattern=".{3,15}" //this sets a minimum of 3 char and max of 15 char
            />
            <button type="submit">Add To-Do</button>
        </form>
        </>
    )
}