import React , {useEffect,useState} from "react";
import TableList from "./__TableList";
import {motion} from "framer-motion";

function Table({lightTheme}) {
    const [table, setTable] = useState([]);
    const [nameSort, setNameSort] = useState(false);
    const [accuracySort, setAccuracySort] = useState(false);
    const [fireSort, setFireSort] = useState(false);
    const [search, setSearch] = useState('')


    useEffect(() => {
        const request = async () => {
            let url = "scoreboard.json";
            let req = await fetch(url);
             return await req.json();
        }
        request()
            .then(data => {
                let arr = data.slice().sort((last, curr) => {
                    return  curr.points - last.points;
                })
                setTable(arr)
            })
            .catch(err => console.log(err))

    },[])

    const nameHandler = () => {
        setNameSort(true);
        setAccuracySort(false);
        setFireSort(false);
        let arr = table.slice().sort((last, current) => {
            return last.Name > current.Name ? 1: -1;
        })
        setTable(arr);
    }
    const accuracyHandler = () => {
        setNameSort(false);
        setAccuracySort(true);
        setFireSort(false);
        let arr = table.slice().sort((last, current) => {
            return current.shotAccuracy - last.shotAccuracy;
        })
        setTable(arr);
    }
    const fireHandler = () => {
        setNameSort(false);
        setAccuracySort(false);
        setFireSort(true);
        let arr = table.slice().sort((last, current) => {
            return current.shotSpeed - last.shotSpeed;
        })
        setTable(arr);
    }


    const formHandler = (e) =>{
        e.preventDefault();
        setSearch('')
    }
    return (
        <motion.div className={lightTheme === true ? "Table light-theme" : "Table dark-theme"}
                    initial = {{x:1000}}
                    animate = {{x:0}}
                    transition={{duration:.4}}
                    exit={{x:"-100vw"}}>
            <div className="main-wrapper">
                <div className="button-wrapper">
                    <div className="sort">Sort by</div>
                    <button onClick={nameHandler} className={nameSort ? "selected-button" : ""}>Name</button>
                    <button onClick={accuracyHandler} className={accuracySort ? "selected-button" : ""} >Accuracy</button>
                    <button onClick={fireHandler} className={fireSort ? "selected-button" : ""} >Rate of fire</button>
                    <form onSubmit={formHandler} action="#" className="main-form" id="main-form" name="main-form" >
                        <input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search by name" type="text"/>
                    </form>
                </div>
                <ul>
                    <li className="table-top">
                        <div className="name">Name</div>
                        <div className="country">Country</div>
                        <div className="rate-of-fire">Rate of fire</div>
                        <div className="shotAccuracy">Accuracy</div>
                        <div className="points"> Total Points</div>
                    </li>

                    <TableList
                        table = {table}
                        search={search}
                    />
                </ul>
            </div>
        </motion.div>
    );
}

export default Table;
