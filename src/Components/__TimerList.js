import React, {useState} from 'react'
import {motion,AnimatePresence} from "framer-motion";

function TimerList({timerList, deleteHandler, timerHandlerStop, timerHandlerPlay, ruTheme}) {

if (ruTheme){
    return(
        <>
            <AnimatePresence>
                {timerList.map((el,idx) => {
                    return (
                        <motion.li key={idx} className='li-timer'
                                   initial={{x:"-100vw"}}
                                   animate={{x:0}}
                                   translation={{duration:.4}}
                                   exit={{x:"100vw"}}
                        >

                            <div className="name">
                                {el.name}
                            </div>
                            <div className="timerValue">
                                <div className="hours">
                                    {`Часы: ${el.hours}`}
                                </div>
                                <div className="minutes">
                                    {`Минуты: ${el.minutes}`}
                                </div>
                                <div className="seconds">
                                    {`Секунды: ${el.seconds}`}
                                </div>
                            </div>
                            <div className="buttons-wrapper">
                                <button className = {el.onPause === true ? "b-inactive" : "just-b"} onClick={() => {timerHandlerStop(idx)}}><i className="fas fa-pause"></i></button>
                                <button className = {el.onPause === false? "b-active" : "just-b"} onClick={() => {timerHandlerPlay(idx)}}><i className="fas fa-play"></i></button>
                                <button className="just-b" onClick={() => {
                                    deleteHandler(idx);
                                } }><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </motion.li>


                    )

                })

                }
            </AnimatePresence>
        </>
    )
} else {
    return(
        <>
            <AnimatePresence>
                {timerList.map((el,idx) => {
                    return (
                        <motion.li key={idx} className='li-timer'
                                   initial={{x:"-100vw"}}
                                   animate={{x:0}}
                                   translation={{duration:.4}}
                                   exit={{x:"100vw"}}
                        >

                            <div className="name">
                                {el.name}
                            </div>
                            <div className="timerValue">
                                <div className="hours">
                                    {`Hours: ${el.hours}`}
                                </div>
                                <div className="minutes">
                                    {`Minutes: ${el.minutes}`}
                                </div>
                                <div className="seconds">
                                    {`Seconds: ${el.seconds}`}
                                </div>
                            </div>
                            <div className="buttons-wrapper">
                                <button className = {el.onPause === true ? "b-inactive" : "just-b"} onClick={() => {timerHandlerStop(idx)}}><i className="fas fa-pause"></i></button>
                                <button className = {el.onPause === false? "b-active" : "just-b"} onClick={() => {timerHandlerPlay(idx)}}><i className="fas fa-play"></i></button>
                                <button className="just-b" onClick={() => {
                                    deleteHandler(idx);
                                } }><i className="fas fa-trash-alt"></i></button>
                            </div>
                        </motion.li>


                    )

                })

                }
            </AnimatePresence>
        </>
    )
}



}

export default TimerList;
