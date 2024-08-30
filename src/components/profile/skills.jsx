import React from "react";
import FAQ from "../faq";
import UsedTable from "./skills/used";

const techStack = [
    "Microsoft Azure",
    "Git",
    "VS Code",
    "Visual Studio",
    "SQL Server",
    "IIS",
    "BrowserStack",
    "NodeJS",
    "ReactJS",
    "ASP.NET Core",
    "Postman",
    "Swagger",
    "PhpMyAdmin",
    "cPanel",
];

function Skill() {
    return (
        <div className="skills padded">
            <h2>S K I L L S</h2>
            <div className="skills-container">
                <FAQ question={"programming"} preset={0}/>
                <FAQ question={"web development"} preset={1}/>
                <FAQ question={"database management systems"} preset={2}/>
                <FAQ question={"version control"} preset={3}/>
            </div>
            <div className="separator-x"/>
            <UsedTable data={techStack}/>
        </div>
    );
}

export default Skill;
