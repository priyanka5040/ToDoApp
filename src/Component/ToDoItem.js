import del from"./images/cross.png";
import completed from"./images/completed.jfif";
function ToDoItem(props) {

    const { item , strike, remove} = props;
    if(item.isCompleted){
        return <div className="item">
        <div><strike>{item.task}</strike></div>
        <div className="btns">
            <div>
                <img className = "comp" src= {completed} alt={"completed"} 
                    onClick={()=>{
                        strike(item.id);
                    }}
                />
            </div>
            <div>
                <img className = "del" src= {del} alt={"delete"} 
                    onClick={()=>{
                        remove(item.id);
                    }}
                />
            </div>
        </div>
    </div>
    }
    else{
        return <div className="item">
            
            <div>{item.task}</div>
                <div className="btns">
                    <div>
                        <img className = "comp" src= {completed} alt={"completed"} 
                        onClick={()=>{
                            strike(item.id);
                        }}
                        />
                    </div>
                    <div>
                        <img className = "del" src= {del} alt={"delete"} 
                            onClick={()=>{
                                remove(item.id);
                            }}
                        />
                    </div>
                </div>
            </div>
    }
}

export default ToDoItem;