import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Burger from "./__burger";


function Header({darkOn, darkOff, lightTheme, darkTheme}) {
 const [width, setWidth] = useState(0);

useEffect(() => {
    setWidth(window.innerWidth)
},[width])

const light = lightTheme? "far fa-lightbulb active-theme" : "far fa-lightbulb"
const dark = darkTheme? "fas fa-moon active-theme" : "fas fa-moon"
  if (width <= 767){
      return (
          <Burger/>
      )

  }else{
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
                          <input onChange={darkOff} type="radio" name="theme" id="themeLight" className="themeLight"/>
                          <label htmlFor="themeLight"><i className={light}></i></label>
                      </div>
                      <div className="dark">
                          <input onChange={darkOn} type="radio" name="theme" id="themeDark" className="themeDark"/>
                          <label htmlFor="themeDark"><i className={dark}></i></label>
                      </div>
                  </div>
              </nav>

          </>
      )
  }


}

export default Header;
