import ToDoList from "./ToDoList";
import {useState} from "react";
import del from"./images/cross.png";
import completed from"./images/completed.jfif";
import "./style.css";
let Id = localStorage.getItem('Id');
if(!Id){
    localStorage.setItem('Id',1);
    Id = 1;
}else{
    Id = parseInt(Id) + 1;
}


function ToDoApp(props) {
    //localStorage.removeItem('todoList');
    //localStorage.removeItem('Id');
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    if(!todoList){
        todoList = [];
    }
    //console.log(todoList);
    
    const [todos, setTodos] = useState(todoList);
    const [inpVal, setValue] = useState("");
    return<div className="App">
        <h1 style={{textAlign:'center'}}>ToDos</h1>
        <div className="input-tasks">
            <div>
                <input type="text"  placeholder="Enter your task"
                    onChange = { (event)=>{
                        setValue(event.target.value);
                    }
                }
                value = {inpVal}
                />
            </div>
            <div>
                <button onClick={()=>{
                    if(inpVal !== ""){
                        setTodos([ ...todos, {id: Id, task:inpVal, isCompleted : false}]);
                        localStorage.setItem('todoList', JSON.stringify([ ...todos, {id: Id, task:inpVal, isCompleted : false}]));
                        localStorage.setItem('Id', Id);
                        Id = Id+1;
                        setValue("");
                    }
                }}>Add Task</button>
            </div>
        </div>
        <div className="tasks">
            {localStorage.setItem('todoList', JSON.stringify(todos))}
            <ToDoList todos= {todos} setTodos = {setTodos}/>
 
        </div>
        <div className ="foot">
                <img className = "comp"src={completed} alt={"completed"} />Mark as completed
                <img className = "del"src={del} alt={"delete"}/> Delete task
            </div>
        
    </div>
}

export default ToDoApp;