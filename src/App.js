import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Switch, useLocation, Redirect} from 'react-router-dom';
import './style/styles.css'
import ToDoList from "./Components/__TodoList";
import Header from "./Components/__Header";
import Calc from "./Components/__Calc";
import Fetch from "./Components/__Fetch";
import Timer from "./Components/__Timer";
import Resume from "./Components/__Resume";
import Table from "./Components/__Table";
import Messenger from "./Components/__Messenger";
import {AnimatePresence} from "framer-motion";


function App () {
    const [lightTheme, setLightTheme] = useState(JSON.parse(localStorage.getItem("light-theme")));
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("dark-theme")));
    const [ruTheme, setRuTheme] = useState(JSON.parse(localStorage.getItem("ru-theme")));
    const [enTheme, setEnTheme] = useState(JSON.parse(localStorage.getItem("en-theme")));

useEffect(() => {
    localStorage.setItem("light-theme", JSON.stringify(lightTheme));
    localStorage.setItem("dark-theme", JSON.stringify(darkTheme));
    localStorage.setItem("ru-theme", JSON.stringify(ruTheme));
    localStorage.setItem("en-theme", JSON.stringify(enTheme));
    }, [lightTheme, darkTheme, ruTheme, enTheme])

const location = useLocation()

const language = (e) => {
   console.log(e.target.value)
    if (e.target.value === "RU"){
        setRuTheme(true);
        setEnTheme(false);
    }
    if (e.target.value === "EN"){
        setRuTheme(false);
        setEnTheme(true);
    }
}

const darkOn = (e) => {
    setLightTheme(false);
    setDarkTheme(true);
    }

const darkOff = (e) => {
    setLightTheme(true);
    setDarkTheme(false);
    }

    return(
            <React.StrictMode>
                <Header
                    darkOn = {darkOn}
                    darkOff = {darkOff}
                    lightTheme = {lightTheme}
                    darkTheme = {darkTheme}
                    ruTheme={ruTheme}
                    enTheme ={enTheme}
                    language = {language}
                />
                <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}  >
                    <Route exact path="/resume">
                        <Resume
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/todolist">
                        <ToDoList
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/fetch">
                        <Fetch
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/calc">
                        <Calc
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/timer">
                        <Timer
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/table">
                        <Table
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Route exact path="/messenger">
                        <Messenger
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                            ruTheme={ruTheme}
                            enTheme ={enTheme}
                        />
                    </Route>
                    <Redirect to="/resume"/>
                </Switch>
                </AnimatePresence>
               </React.StrictMode>

    )
 }

export default App;
