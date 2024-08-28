import React from "react";
import FAQ from "../faq";

function Skill() {
    return (
        <div className="padded">
            <h2>S K I L L S</h2>
            <div className="skills-container">
                <FAQ question={"programming"} preset={0}/>
                <FAQ question={"web development"} preset={1}/>
                <FAQ question={"database management systems"} preset={2}/>
                <FAQ question={"version control"} preset={3}/>
            </div>
        </div>
    );
}

export default Skill;
