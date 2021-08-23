import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import Burger from "./__burger";


function Header({darkOn, darkOff, lightTheme, darkTheme, ruTheme,enTheme, language}) {
 const [width, setWidth] = useState(0);

useEffect(() => {
    setWidth(window.innerWidth)
},[width])

const light = lightTheme? "far fa-lightbulb active-theme" : "far fa-lightbulb";
const dark = darkTheme? "fas fa-moon active-theme" : "fas fa-moon";
const ru = ruTheme? "active-theme" : "";
const en = enTheme? "active-theme" : "";


  if (width <= 767){

         return (
             <Burger
                 ruTheme = {ruTheme}
                 enTheme = {enTheme}
                 language = {language}
                 darkOn = {darkOn}
                 darkOff ={darkOff}
                 lightTheme = {lightTheme}
                 darkTheme = {darkTheme}
             />
         )

  }else{
      if (ruTheme) {
          return(
              <>
                  <nav>
                      <span><Link className="rus" to="/resume">Резюме</Link></span>
                      <ul>
                          <li><Link className="rus" to="/todolist">Список дел</Link></li>
                          <li><Link className="rus" to="/calc">Калькулятор</Link></li>
                          <li><Link className="rus" to="/timer">Таймер</Link></li>
                          <li><Link className="rus" to="/table">Таблица</Link></li>
                          <li><Link className="rus" to="/messenger">Мессенджер</Link></li>
                      </ul>
                      <div className="lang-changer-wrapper">
                          <div className="lang__ru">
                              <input onChange={language} value="RU" type="radio" name="langChange" id="langRu" className="langRu"/>
                              <label htmlFor="langRu" className={ru}>RU</label>
                          </div>
                          <div className="lang__en">
                              <input onChange={language} value="EN" type="radio" name="langChange" id="langEn" className="langEn"/>
                              <label htmlFor="langEn" className={en}>EN</label>
                          </div>
                      </div>
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
    else {
          return(
              <>
                  <nav>
                      <span><Link className="rus" to="/resume">Resume</Link></span>
                      <ul>
                          <li><Link to="/todolist">To Do List</Link></li>
                          <li><Link to="/calc">Calculator</Link></li>
                          <li><Link to="/timer">Timer</Link></li>
                          <li><Link to="/table">Table</Link></li>
                          <li><Link to="/messenger">Messenger</Link></li>
                      </ul>
                      <div className="lang-changer-wrapper">
                          <div className="lang__ru">
                              <input onChange={language} value="RU" type="radio" name="langChange" id="langRu" className="langRu"/>
                              <label htmlFor="langRu" className={ru}>RU</label>
                          </div>
                          <div className="lang__en">
                              <input onChange={language} value="EN" type="radio" name="langChange" id="langEn" className="langEn"/>
                              <label htmlFor="langEn" className={en}>EN</label>
                          </div>
                      </div>
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


}

export default Header;
