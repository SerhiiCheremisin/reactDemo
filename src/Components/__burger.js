import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {motion,AnimatePresence} from "framer-motion";

const Burger = () => {
const [hidden, setHidden] = useState(false)

const burgerStyle = hidden ? "burger-links" : "hidden-burger";

    return(
             <>
        <AnimatePresence>
              <motion.div className="burger-wrapper"
        initial={{x:-1000}}
        animate={{x:0}}
        translation={{duration:.4}}
        exit={{x:1000}}
        >
          <div className={burgerStyle}>
             <div onClick={() => setHidden(!hidden)} className="burger-closer">
                 <i className="fas fa-times"></i>
             </div>
                <ul>
                    <li onClick={() => setHidden(!hidden)}><Link to="/resume">Resume</Link></li>
                    <li onClick={() => setHidden(!hidden)}><Link to="/todolist">To Do List</Link></li>
                    <li onClick={() => setHidden(!hidden)}><Link to="/calc">Calculator</Link></li>
                    <li onClick={() => setHidden(!hidden)}><Link to="/timer">Timer</Link></li>
                    <li onClick={() => setHidden(!hidden)}><Link to="/table">Table</Link></li>
                    <li onClick={() => setHidden(!hidden)}><Link to="/messenger">Messenger</Link></li>
                </ul>
            </div>
        <div className="burger">
         <input type="checkbox" id="burger-radio" className="burger-radio"/>
         <label onClick={() => setHidden(!hidden)} className='burger-label' htmlFor="burger-radio"></label>
         </div>

        </motion.div>
        </AnimatePresence>
        </>

    )


}

export default Burger;
