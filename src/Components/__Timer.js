import React, {useState, useEffect} from 'react'
import TimerList from "./__TimerList";
import {motion} from "framer-motion";

function Timer({darkTheme,lightTheme,ruTheme}) {

const [timerItem, setTimerItem] = useState('');
const [timerList, setTimerList] = useState(JSON.parse(localStorage.getItem("timer")) || []);
const [today,setToday] = useState(new Date().toDateString());

useEffect(() => {
    localStorage.setItem("timer",JSON.stringify(timerList));
},[timerList])


const formHandler = (e) =>{
e.preventDefault();
if (timerItem === ''){
    const newTimer = [{name: today, onPause: false, isDeleted:false, seconds:0, minutes: 0, hours:0}];
    const newState = timerList.concat(newTimer);
    setTimerList(newState);
       } else {
    const newTimer = [{name: timerItem, onPause: false, isDeleted:false, seconds:0, minutes: 0, hours:0}];
    const newState = timerList.concat(newTimer);
    setTimerList(newState);
    setTimerItem('');

}

  }


const deleteHandler = (e) =>{
    timerList.map((el,idx) =>{
        if (e === idx){
            const before = timerList.slice(0, idx);
            const after = timerList.slice(idx+1);
            const newState = [...before,...after];
            setTimerList(newState);
                    }
    })
}

const timerHandlerStop = (e)=> {
let newArr = timerList.slice();
  newArr.map((el,idx) => {
      if (e === idx){
         if (el.onPause === true)
             return
         else{
             el.onPause = true;
         }
          setTimerList(newArr);
               }
  })
    }
    const timerHandlerPlay = (e)=> {
        let newArr = timerList.slice();
        newArr.map((el,idx) => {
            if (e === idx){
                if (el.onPause === false){
                } else {
                    el.onPause = false;
                }
                setTimerList(newArr);
                           }
        })
    }
    const timerHandler =  () => {
        if (timerList === []){

                }
        else{
            const newArr = timerList.slice();
            newArr.map((el,idx) => {
                if(el.minutes === 59){
                    el.hours++
                    el.seconds = 0;
                }
                if (el.seconds === 59){
                    el.minutes++
                    el.seconds = 0;
                }
                if(el.onPause === true){

                }
                if (el.onPause === false){
                    let sec = el.seconds + 1;
                    let before = newArr.slice(0,idx);
                    let current = [{name: el.name, onPause: el.onPause, isDeleted:el.isDeleted, seconds:sec, minutes: el.minutes, hours:el.hours}];
                    let after = newArr.slice(idx+1);
                    let newState = [...before,...current,...after];
                    setTimerList(newState);
                                   }

            })
        }
    }


    useEffect(()=>{
        let interval  = setInterval(timerHandler,1000)
               return () => clearInterval(interval);
    },[timerList]);


        return(
    <motion.div className = {lightTheme === true ? "light-theme" : "dark-theme"}
                initial = {{x:-1000}}
                animate = {{x:0}}
                transition={{duration:.4}}
                exit={{x:"-100vw"}}
    >
    <div className="timer-list">
            <ul>
<TimerList
    timerList={timerList}
    deleteHandler = {deleteHandler}
    timerHandlerStop = {timerHandlerStop}
    timerHandlerPlay = {timerHandlerPlay}
    ruTheme = {ruTheme}
/>
            </ul>
    </div>


<form onSubmit={formHandler} className="timer">
        <input type="text" id="timer" value={timerItem} onChange={(e) => {setTimerItem(e.target.value)}}/>
        <button htmlFor="timer"><i className="fas fa-play-circle"></i></button>
</form>

        </motion.div>
)
}


export default Timer;
