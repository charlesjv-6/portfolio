import React from "react";
import arc1 from '../assets/images/arc1.png'
import arc2 from '../assets/images/arc2.png'
import arc3 from '../assets/images/arc3.png'
import bcaa1 from '../assets/images/bcaa1.png'
import bcaa2 from '../assets/images/bcaa2.png'
import bcaa3 from '../assets/images/bcaa3.png'
import shitbox from '../assets/images/8box.jpeg'
import UsedTable from "../components/profile/skills/used";

const arc = [
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
    "Swagger"
];

const shit = [
    "PhpMyAdmin",
    "Git",
    "VS Code",
    "NodeJS",
    "cPanel",
    "Postman"
];


function Project() {
    return (
        <section id="project" className="radius-full padded">
            <h1>PROJECTS I HAVE CONTRIBUTED TO</h1>
            <div className="separator-x"/>
            <div className="project-container padded">
                <header>ARCADIER PTE LTD</header>
                <div className="project-info padded">
                    During my tenure at Arcadier from November 2023 to September 2024, I actively contributed to a wide range of projects, including both internal initiatives and client-facing solutions. My role involved collaborating closely with cross-functional teams to develop, enhance, and deploy high-quality software products tailored to meet diverse client needs. My work at Arcadier provided me with the opportunity to apply and expand my expertise in full-stack development, specifically in technologies like Node.js, React.js, and ASP.NET Core, while also deepening my understanding of industry best practices and software development lifecycle processes. These experiences allowed me to deliver impactful results on multiple projects, ensuring they met stringent quality standards and client expectations.
                </div>
                <UsedTable data={arc}/>
                <div className="project-images flex-row padded gapped center-child">
                    <img className="radius-full" src={arc1} alt="ss1" />
                    <img className="radius-full" src={arc2} alt="ss2" />
                    <img className="radius-full" src={arc3} alt="ss3" />
                </div>
                <iframe className="no-border radius-full" src="https://www.arcadier.com" title="ARCADIER"></iframe>
                <div className="project-images flex-row padded gapped center-child">
                    <img className="radius-full" src={bcaa1} alt="ss1" />
                    <img className="radius-full" src={bcaa2} alt="ss2" />
                    <img className="radius-full" src={bcaa3} alt="ss3" />
                </div>
                <iframe className="no-border radius-full" src="https://marketplace.bcaa.com" title="BCAA"></iframe>
            </div>
            <div className="separator-x"/>
            <div className="project-container padded">
                <header>8BOX SOLUTIONS</header>
                <div className="project-info padded">
                    At 8Box Solutions, I gained my initial professional experience, where I had the opportunity to work closely with clients to meet their expectations. This role involved not only direct client interactions but also collaborating extensively with team members. I developed skills in project management, effective communication, and teamwork, which were crucial in delivering high-quality solutions and achieving project goals.<br/><br/>

                    <i>I am currently having difficulty locating specific projects that I worked on during my tenure with the company. I am keen to identify and review these projects to better reflect on my contributions and achievements. </i>
                </div>
                <UsedTable data={shit}/>
                <div className="project-images flex-row padded gapped center-child">
                    <img className="radius-full" src="https://th.bing.com/th/id/OIP.f4p4uK6HouGDN8kI76KmFwAAAA?rs=1&pid=ImgDetMain" alt="ss1" />
                    <img className="radius-full" src="https://th.bing.com/th/id/OIP.f4p4uK6HouGDN8kI76KmFwAAAA?rs=1&pid=ImgDetMain" alt="ss2" />
                    <img className="radius-full" src="https://th.bing.com/th/id/OIP.f4p4uK6HouGDN8kI76KmFwAAAA?rs=1&pid=ImgDetMain" alt="ss3" />
                </div>
                <img className="radius-full shit" src={shitbox} alt="ss1" />
            </div>
        </section>
    );
}

export default Project;