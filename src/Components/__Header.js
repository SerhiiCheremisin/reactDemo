import React from "react"
import {Link} from 'react-router-dom'


function Header({darkOn, darkOff, lightTheme, darkTheme}) {


    return(
   <>
<nav>
    <span><Link to="/resume">Resume</Link></span>
    <ul>
        <li><Link to="/todolist">To Do List</Link></li>
        <li><Link to="/calc">Calculator</Link></li>
        <li><Link to="/timer">Timer</Link></li>
        <li><Link to="/table">Table</Link></li>
        <li><Link to="/messenger">Messenger</Link></li>
    </ul>


        <div className="themeChanger">
        <div className="light">
            <input onChange={darkOff} checked={lightTheme} type="radio" name="theme" id="themeLight" className="themeLight"/>
            <label htmlFor="themeLight"><i className="far fa-lightbulb"></i></label>
        </div>
        <div className="dark">
            <input onChange={darkOn} checked={darkTheme} type="radio" name="theme" id="themeDark" className="themeDark"/>
            <label htmlFor="themeDark"><i className="fas fa-moon"></i></label>
        </div>
    </div>


</nav>


   </>

)
}

export default Header;