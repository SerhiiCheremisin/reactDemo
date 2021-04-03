import React from "react";


const TableList = ({table,search}) =>{

    return(
        <>
            {table.filter((el) => {
                if (search === ''){
                    return el
                }
                if (el.Name.toLowerCase().includes(search.toLowerCase())){
                    return el
                }
            }).map((el,idx) => {
                return(
                    <li key={idx}>
                        <div className="name">{el.Name}</div>
                        <div className="country">{el.Country}</div>
                        <div className="rate-of-fire">{el.shotSpeed}</div>
                        <div className="shotAccuracy">{el.shotAccuracy}</div>
                        <div className="points">{el.points}</div>
                    </li>

                )
            })}
        </>
    )

}
export default TableList;