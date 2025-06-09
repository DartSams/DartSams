import React from "react";
import Pic from "./Pic";
import '../Card.css'

const ExpCard = ({date,company,title,text,tools}) => {
    return (
        <div className="card">
            <div id="left-card-container">
                <p>{date}</p>
            </div>

            <div id="right-card-container">
                <h2>{company}</h2>
                <h3>{title}</h3>
                <p>{text}</p>
                <div id="card-tools">
                    {tools.map((item, index) => (
                    <button>{item}</button>
                ))}
                </div>
            </div>
        </div>
    )
}


export default ExpCard;