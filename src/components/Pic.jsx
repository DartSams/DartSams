import React from "react";

const Pic = ({text}) => {
    return(
        <div className="pic">
            <img src="portfolio\public\vite.svg" alt={text}/>
        </div>
    )
}

export default Pic;