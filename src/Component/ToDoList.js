
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const {todos, setTodos} = props;

    function strike(id){
        setTodos(
             todos.map((todo) => {
                if(todo.id === id){
                    todo.isCompleted = !todo.isCompleted;
                    return todo;
                }
                return todo;
            })
            
        );
        
        
    }
    function remove(id){
        setTodos(
            todos.filter((todo) => {
                if(todo.id !== id){
                    return true;
                }
                else{
                    return false;
                }
        })
        );
    }
    
    

    return <div>
        
        {todos.map((todo)=>{
            return <ToDoItem remove = {remove} strike = {strike} item = {todo}/>
        })}
    </div>
}

export default ToDoList;