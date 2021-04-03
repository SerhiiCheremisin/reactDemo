import React, {useState} from 'react'



const MessengerList = ({members,readHandler, number}) =>{
    const [selected, setSelected] = useState('');

    return(
        <>

            {members.map((el,idx) => {


                const matchSearch =  () => {
                    if (number === el.number.slice(0,number.length)){
                        return el.number.slice(0,number.length);
                    }
                    if (number !== el.number.slice(0,number.length)){

                    }
                }

                const rest = () =>{
                    if (number !== el.number.slice(0,number.length)){
                        return el.number;
                    }
                    return el.number.slice(number.length)

                }
                return(
                    <li onClick={() => readHandler(idx)} className={el.isRed ? "" : "hav-not-red"} key = {idx}>
                        <div className="photo">
                            <div className={el.gender === 'female' ? 'icon-gender gender-female' : 'icon-gender gender-male'}>

                            </div>
                            <div className={el.gender === 'female' ? "icon-messenger messenger-female" : "icon-messenger messenger-male " }>

                            </div>
                        </div>
                        <div className="name-and-number">
                            <div className="name">{el.name}</div>
                            <div className="number">
                              <span className="select-number">
                                  {matchSearch()}
                              </span>
                                <span>
                                  {rest()}
                              </span>
                            </div>
                        </div>

                        <div className="text">{el.text}</div>
                        <div className="time">{el.hours}: {el.minutes}</div>
                        <div className="date">{el.date}</div>
                    </li>
                )
            }) }
        </>

    )


}


export default MessengerList;