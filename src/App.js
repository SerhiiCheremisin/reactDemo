import React, {useState} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './style/styles.css'
import ToDoList from "./Components/__todoList";


import Header from "./Components/__header";
import Calc from "./Components/__calc";
import Fetch from "./Components/__fetch";
import Four0Four from "./404";
import Timer from "./Components/__timer";
import Resume from "./Components/__resume";


function App () {
const [lightTheme, setLightTheme] = useState(true);
const [darkTheme, setDarkTheme] = useState(false);

const darkOn = (e) => {
    setLightTheme(false);
    setDarkTheme(true);
    }

const darkOff = (e) => {
    setLightTheme(true);
    setDarkTheme(false);
    }

    return(
        <BrowserRouter>
            <React.StrictMode>
                <Header
                    darkOn = {darkOn}
                    darkOff = {darkOff}
                />

                <Switch>
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
                    <Route exact path="*">
                        <Four0Four
                            lightTheme = {lightTheme}
                            darkTheme = {darkTheme}/>
                    </Route>
                </Switch>
            </React.StrictMode>
        </BrowserRouter>
    )
 }

export default App;
