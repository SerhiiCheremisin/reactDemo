import React from "react"
import {Link} from 'react-router-dom'


function Header() {

    return(
   <>
<nav>
    <span><Link to="/">Resume</Link></span>
    <ul>
        <li><Link to="/todolist">To Do List</Link></li>
        <li><Link to="/fetch">Fetch Demo</Link></li>
        <li><Link to="/calc">Calculator</Link></li>
    </ul>

</nav>


   </>

)
}

export default Header;