const Todo = ({todo, remove}) => {

return (

<li onClick(remove(todo.id))>{todo.text} </li>
        
        );
    }

const TodoList = ({todo, remove}) => {
    const TodoNode = todo.map((todo) => 
        return(<Todo todo={todo} key={todo.id} remove={remove}/>
});

return (<ul>{TodoNode}</ul>)

