import React, {useState,useEffect} from 'react';
import {motion} from "framer-motion";
import MessengerList from "./__MessengerItem"

function Messenger({lightTheme}) {
    const [number, setNumber] = useState('');
    const [members, setMembers] = useState([])
    const [loaded,setLoaded] = useState(false);


    useEffect(() => {
        const members = async () => {
            let url = "members.json";
            let resp = await fetch(url);
            let data = await resp.json()
            return data;
        }

        members().then((data)=> {
            let before = data.filter(el => el.isRed === true).sort((previus, current) =>
                current.hours - previus.hours
            );
            let after = data.filter(el => el.isRed === false).sort((previus, current) =>
                current.hours - previus.hours
            );
            let Arr = [...before,...after]
            setMembers(Arr);
            setLoaded(true);
        })
    },[])

    const formHandler = (e) => {
        e.preventDefault();
        if (number === ""){

        } else {
            setNumber('');
        }
    }

    const refreshHandler = () => {
        window.location.reload();
    }


    const readHandler = (e) =>{
        members.slice().map((el,idx) => {
            if (e === idx){
                if(el.isRed === true){

                } else{
                    let before = members.slice(0,idx);
                    let after = members.slice(idx+1)
                    let current = [{name: el.name, number : el.number, text:el.text, date:el.date, hours:el.hours, minutes:el.minutes, gender:el.gender, isRed: true}];
                    let newState = [...before,...current,...after]
                    setMembers(newState);
                }
            }
        })

    }

    const numberHandler = (e) => {
        let value = e.target.value;

        setNumber(value);

    }

    const numberCleaner = () =>{
        setNumber('');
    }

    if (loaded === false ){
        return (
            <>
                <h1>Данные еще грузятся</h1>

            </>
        )

    }
    return (
        <motion.div className={lightTheme === true ? "Messenger light-theme" : "Messenger dark-theme"}
                    initial = {{y:1000}}
                    animate = {{y:0}}
                    transition={{duration:.4}}
                    exit={{x:"-100vw"}}>
            <div className="screen-wrapper">
                <form onSubmit={formHandler} action="#" id="tele-form" className="tele-form" name="tele-form">
                    <div className="input-table">
                        <input onChange={numberHandler} value={number} type="text"/>
                        <button onClick={numberCleaner} className="clear-button">
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="search-icon">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </form>
                <div className="members-block">
                    <div className="members-block--header">
                        <button onClick={refreshHandler}><i className="fas fa-sync-alt"></i></button> Найденно {members.length} клиентов
                    </div>
                    <ul>
                        <MessengerList
                            members = {members}
                            readHandler = {readHandler}
                            number = {number}
                        />
                    </ul>

                </div>

            </div>


        </motion.div>
    );

}

export default Messenger;
