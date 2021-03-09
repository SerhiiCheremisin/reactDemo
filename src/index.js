import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './style/styles.css'
import ToDoList from "./Components/__todoList";

import App from './App';
import Header from "./Components/__header";
import Calc from "./Components/__calc";
import Fetch from "./Components/__fetch";
import Four0Four from "./404";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/todolist">
                    <ToDoList/>
                </Route>
                <Route exact path="/fetch">
                    <Fetch/>
                </Route>
                <Route exact path="/calc">
                    <Calc/>
                </Route>
                <Route exact path="*">
                    <Four0Four/>
                </Route>
            </Switch>

        </React.StrictMode>
        </BrowserRouter>
  ,
  document.getElementById('root')
);

