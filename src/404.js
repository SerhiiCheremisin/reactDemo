import React from "react";



function Four0Four({darkTheme,lightTheme}) {
return(
    <div className = {lightTheme === true ? "error-page light-theme" : "error-page dark-theme"}>
        <div className="arrow">
            <i className="fas fa-arrow-up"></i>
        </div>
        <div className="hs">
            <h1>This is just a react JS demo.</h1>
            <h2>Please, check the links above</h2>
        </div>

        <div className="arrow">
            <i className="fas fa-arrow-up"></i>
        </div>
        </div>

)
}

export default Four0Four;
