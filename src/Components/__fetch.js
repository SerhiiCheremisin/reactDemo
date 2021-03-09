import React from 'react'
import {useState,useEffect} from 'react'

function Fetch() {
const [users, setUsers] = useState([])
const [userId, setUserId] = useState(0)

useEffect(() => {
    console.log("effect has done")
    const user = async function () {
        let promise = await fetch('https://jsonplaceholder.typicode.com/users')
        let response = await promise.json();

        return  response
    }
    user()
        .then(data => setUsers(data))
        .catch(error => error)

},[])
console.log(userId);

 const leftHandler = () => {
     if (userId <= 0) {
         setUserId(users.length-1);
     }   else{
         setUserId(userId-1);
     }
    }
    const rightHandler = () => {
     if (userId >= users.length-1) {
         setUserId(0);
     }   else{
         setUserId(userId+1);
     }

    }



    return(
<>
  <div className="slider">
    <button onClick={leftHandler} className="left"><i className="fas fa-chevron-left"></i></button>
<div className="slider-body">
    {
        users.map((el,idx) => {
            if(userId === idx){
                 return(
                    <div key={userId}>
                    <div className="name">
                        {el.name}
                    </div>
                    <div className="email">
                        {el.email}
                    </div>
                    <div className="phone">
                        {el.phone}
                    </div>
                     <div className="website">
                         {el.website}
                     </div>
                     <div className="address">
                         <ul>
                             <li>{el.address.city}</li>
                             <li>{el.address.street}</li>
                             <li>{el.address.suite}</li>
                         </ul>
                     </div>
                     </div>
                 )

              }

        })

    }
</div>
    <button onClick={rightHandler} className="right"><i className="fas fa-chevron-right"></i></button>

  </div>

</>
    )
}

export default Fetch;