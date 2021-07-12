import React from 'react'
import {motion,AnimatePresence} from "framer-motion";


function TaskList({task, markAsImportant,deleteTask,}) {

    return(
      <>
          <AnimatePresence>
    {task.map((el,idx) => {

         if (el.isImportant === true){
             return (
                <motion.div key={idx} className="taskContainer"
                             initial={{x:"-100vw"}}
                             animate={{x:0}}
                             translation={{duration:.4}}
                             exit={{x:"100vw"}}
                 >
                     <div className="liContainer">

                         <li className="importantTask" >
                             {el.task}
                         </li>
                     </div>
                     <div className="buttons">
                         <button onClick={() => {deleteTask(idx)}} className="deleteTask">Delete</button>
                         <button onClick={() => {markAsImportant(idx)}} className="makeAsImportant">Important</button>
                     </div>
                 </motion.div>

             )
         } else return (

                    <motion.div key={idx} className="taskContainer"
                                initial={{x:"-100vw"}}
                                animate={{x:0}}
                                translation={{duration:.4}}
                                exit={{x:"100vw"}}>
                 <div className="liContainer">
                     <li>
                         {el.task}
                     </li>
                 </div>
                 <div className="buttons">
                     <button onClick={() => {deleteTask(idx)}} className="deleteTask">Delete</button>
                     <button onClick={() => {markAsImportant(idx)}} className="makeAsImportant">Important</button>
                 </div>
             </motion.div>

         )
    })}
          </AnimatePresence>
           </>

    )


}


export default TaskList;
