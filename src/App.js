import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Switch, useLocation} from 'react-router-dom';
import './style/styles.css'
import ToDoList from "./Components/__TodoList";
import Header from "./Components/__Header";
import Calc from "./Components/__Calc";
import Fetch from "./Components/__Fetch";
import Four0Four from "./404";
import Timer from "./Components/__Timer";
import Resume from "./Components/__Resume";
import Table from "./Components/__Table";
import Messenger from "./Components/__Messenger";
import {AnimatePresence} from "framer-motion";

function App () {
    const [lightTheme, setLightTheme] = useState(JSON.parse(localStorage.getItem("light-theme")));
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("dark-theme")));

useEffect(() => {
    localStorage.setItem("light-theme", JSON.stringify(lightTheme));
    localStorage.setItem("dark-theme", JSON.stringify(darkTheme));
    }, [lightTheme, darkTheme])

const location = useLocation()

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
                />
                <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}  >
                    <Route exact path="/resume">
                        <Resume
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="/todolist">
                        <ToDoList
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}
                        />
                    </Route>
                    <Route exact path="/fetch">
                        <Fetch
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="/calc">
                        <Calc
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="/timer">
                        <Timer
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="/table">
                        <Table
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="/messenger">
                        <Messenger
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                    <Route exact path="*">
                        <Four0Four
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                </Switch>
                </AnimatePresence>
            </React.StrictMode>

    )
 }

export default App;
