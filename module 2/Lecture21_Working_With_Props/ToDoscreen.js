import {useState} from "react";
import Task from "../component/Task";

function ToDoScreen(){
    const [taskList, setTaskList]= useState([]);
    return(
        <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <div onClick={(e)=>{
                    setTaskList([
                        ...taskList,
                        {
                            title: "Go to Mandir",
                            description: "To worship God",
                            create_date: new Date(),
                        }
                    ]);
                    console.log(taskList);
                }}
                className="ui secondary button">
                    Add Task
                </div>
                <section>
                    <div className="ui cards">
                        {taskList.map((task) => (
                            <Task task={task}/>
                            ))}
                    </div>
                </section>
                
            </div>
    );
}
export default ToDoScreen;
