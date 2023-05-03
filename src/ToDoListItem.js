import './ToDoListItem.css';

export default function ToDoListItem({index, todo}) {
    return (
        <li 
            className="ToDoListItem" 
            style={{backgroundColor: index%2 ? 'lavender' : 'plum'}}>
            <div className="flex-ctr-ctr">{index + 1}</div>
            {todo}
        </li>
    )
}