import React, { useState } from "react";
import Table from "./profile/skills/table";

const programmingData = [
    {
        language: "Java",
        framework: "Gradle",
        level: "Advanced",
        year: "2018"
    },
    {
        language: "C#",
        framework: "ASP.NET Core",
        level: "Advanced",
        year: "2023"
    },
    {
        language: "",
        framework: "Windows Form",
        level: "Advanced",
        year: "2023"
    },
    {
        language: "",
        framework: "Unity",
        level: "Intermediate",
        year: "2022"
    },
    {
        language: "PHP",
        framework: "Vanilla",
        level: "Beginner",
        year: "2022"
    },
    {
        language: "JavaScript",
        framework: "Vanilla",
        level: "Advanced",
        year: "2022"
    },
    {
        language: "",
        framework: "ReactJS",
        level: "Advanced",
        year: "2023"
    },
    {
        language: "",
        framework: "NodeJS",
        level: "Advanced",
        year: "2023"
    }
];

const webDevelopmentData = [
    {
        language: "HTML",
        framework: "-",
        level: "Advanced",
        year: "2022"
    },
    {
        language: "CSS",
        framework: "-",
        level: "Advanced",
        year: "2022"
    }
];

const versionControlData = [
    {
        language: "Git",
        framework: "-",
        level: "Advanced",
        year: "2023"
    }
];

const databaseManagementData = [
    {
        language: "MSSQL",
        framework: "-",
        level: "Advanced",
        year: "2022"
    },
    {
        language: "MySQL",
        framework: "-",
        level: "Advanced",
        year: "2022"
    },
    {
        language: "MongoDB",
        framework: "-",
        level: "Intermediate",
        year: "2023"
    }
];

function FAQ({ question, answer, preset }) {
    const [status, setStatus] = useState("closed");
    const getContent = ()=> {
        if(preset !== undefined) {
            const presets = [
                <Table data={programmingData}/>, 
                <Table data={webDevelopmentData}/>, 
                <Table data={databaseManagementData}/>, 
                <Table data={versionControlData}/>
            ];
            return (
                <div className={`answer padded ${status === "open" ? "" : "no-display"}`}>
                    {presets[preset]}
                </div>
            );
        } else {
            return <div className={`answer padded ${status === "open" ? "" : "no-display"}`}>
                {answer && answer.toUpperCase()}
            </div>
        }
    }
    return (
        <div>
            <div className={`question padded ${status === "open" ? "radius-top" : "radius-full"}`} onClick={()=> setStatus(status === "closed" ? "open" : "closed")}>
                {question && <b>{question.toUpperCase()}</b>}
            </div>
            { getContent() }
        </div>
    );
}

export default FAQ;
