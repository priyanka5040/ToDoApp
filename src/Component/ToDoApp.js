import ToDoList from "./ToDoList";
import {useState} from "react";
import del from"./images/cross.png";
import completed from"./images/completed.jfif";
import "./style.css";
let Id = 1;

function ToDoApp() {
    
    const [todos, setTodos] = useState([]);
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
                        Id = Id+1;
                        setValue("");
                    }
                }}>Add Task</button>
            </div>
        </div>
        <div className="tasks">
            <ToDoList todos= {todos} setTodos = {setTodos}/>
 
        </div>
        <div className ="foot">
                <img className = "comp"src={completed} alt={"completed"} />Mark as completed
                <img className = "del"src={del} alt={"delete"}/> Delete task
            </div>
        
    </div>
}

export default ToDoApp;