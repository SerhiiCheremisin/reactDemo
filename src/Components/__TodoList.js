import React from 'react'
import {useState, useEffect} from 'react'
import TaskList from "./__TaskList";
import {motion} from "framer-motion";

function ToDoList({darkTheme,lightTheme, ruTheme}) {

 const [task, setTask] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
 const [tempTask, setTempTask] = useState('');

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
},[task])


 const formHandler = (e) =>{
     e.preventDefault();
     if (tempTask === ''){
         return
     }
     const newTask = [{task:tempTask,id:task.length,isImportant:false}];
     const newState = task.concat(newTask);
     setTask(newState);
     setTempTask('');
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
             }
     })
 }

 const deleteTask = (e) => {
         const before = task.slice(0,e);
         const after = task.slice(e+1);
         const newState = [...before, ...after];
         setTask(newState)
          }

if (ruTheme) {
    return(
        <motion.div className={lightTheme === true ? "light-theme" : "dark-theme"}
                    initial={{x:"100vw"}}
                    animate={{x:0}}
                    translation={{duration:.4}}
                    exit = {{x:"-100vw"}}
        >
            <ul className="tasks">
                <TaskList
                    task={task}
                    markAsImportant={markAsImportant}
                    deleteTask={deleteTask}
                    ruTheme={ruTheme}
                />
            </ul>
            <form onSubmit={formHandler} action="#" id="task" className="task">
                <input onChange={inputHandler} type="text" placeholder="Добавить задачу" value={tempTask}/>
                <button>Добавить</button>
            </form>

        </motion.div>
    )
}
else {
    return(
        <motion.div className={lightTheme === true ? "light-theme" : "dark-theme"}
                    initial={{x:"100vw"}}
                    animate={{x:0}}
                    translation={{duration:.4}}
                    exit = {{x:"-100vw"}}
        >
            <ul className="tasks">
                <TaskList
                    task={task}
                    markAsImportant={markAsImportant}
                    deleteTask={deleteTask}
                    ruTheme={ruTheme}
                />
            </ul>
            <form onSubmit={formHandler} action="#" id="task" className="task">
                <input onChange={inputHandler} type="text" placeholder="Add a task" value={tempTask}/>
                <button>Add a Task</button>
            </form>

        </motion.div>
    )
}

}

export default ToDoList;
