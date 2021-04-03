import React, {useState} from 'react'


function TimerList({timerList, deleteHandler, timerHandlerStop, timerHandlerPlay}) {



    return(
      <>
          {timerList.map((el,idx) => {

              return (
                  <li key={idx} className='li-timer'>
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
                  </li>

              )

          })

          }
      </>
      )
}

export default TimerList;