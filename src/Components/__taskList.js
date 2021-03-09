import React from 'react'



function TaskList({task, markAsImportant,deleteTask,}) {

    return(
      <>
    {task.map((el,idx) => {

         if (el.isImportant === true){
             return (
                 <div key={idx} className="taskContainer">
                     <div className="liContainer">

                         <li className="importantTask" >
                             {el.task}
                         </li>
                     </div>
                     <div className="buttons">
                         <button onClick={() => {deleteTask(idx)}} className="deleteTask">Delete</button>
                         <button onClick={() => {markAsImportant(idx)}} className="makeAsImportant">Important</button>
                     </div>
                 </div>
             )
         } else return (
             <div key={idx} className="taskContainer">
                 <div className="liContainer">

                     <li>
                         {el.task}
                     </li>
                 </div>
                 <div className="buttons">
                     <button onClick={() => {deleteTask(idx)}} className="deleteTask">Delete</button>
                     <button onClick={() => {markAsImportant(idx)}} className="makeAsImportant">Important</button>
                 </div>
             </div>

         )





    })}
           </>

    )


}


export default TaskList;