import React from 'react'
import {useState} from 'react'
import TaskList from "./__taskList";

function ToDoList({darkTheme,lightTheme}) {

 const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
 const [tempTask, setTempTask] = useState('');

 const formHandler = (e) =>{
     e.preventDefault();
     if (tempTask === ''){
         return
     }
     const newTask = [{task:tempTask,id:task.length,isImportant:false}];
     const newState = task.concat(newTask);
     setTask(newState);
     setTempTask('')
     localStorage.setItem("tasks", JSON.stringify(task));
    }


 const inputHandler = (e) =>{
     let target = e.target.value;
     setTempTask(target);
 }


 const markAsImportant = (e) =>{
     let newArr = task.slice();
     newArr.map((el,idx) =>{
         if(el.id === e){
             let logic = !el.isImportant;
             el.isImportant = logic;
             setTask(newArr);
             localStorage.setItem("tasks", JSON.stringify(task));

         }
     })
 }



 const deleteTask = (e) => {
     const before = task.slice(0,e);
     const after = task.slice(e+1);
     const newState = [...before, ...after];
     setTask(newState)
     localStorage.setItem("tasks", JSON.stringify(task));

}

    return(
        <div className={lightTheme === true ? "light-theme" : "dark-theme"}>
            <ul className="tasks">
                <TaskList
                    task={task}
                    markAsImportant={markAsImportant}
                    deleteTask={deleteTask}
                />
            </ul>
            <form onSubmit={formHandler} action="#" id="task" className="task">
                <input onChange={inputHandler} type="text" placeholder="Type your task" value={tempTask}/>
                <button>Add a task</button>
            </form>

            </div>
    )
}

export default ToDoList;