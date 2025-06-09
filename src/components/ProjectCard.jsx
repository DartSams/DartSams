import React from "react";

const ProjectCard = ({img,title,text}) => {
    return (
        <div className="card">
            <div id="left-card-container">
                <img src={img} alt="" />
            </div>

            <div id="right-card-container">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}


export default ProjectCard;