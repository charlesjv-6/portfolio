import React from "react";
import shitbox from '../assets/images/8box.jpeg'
import ProjectInfo from "../components/project-info";
import GitHub from "../components/github";

const arcInfo = {
    name: "ARCADIER",
    detail: "Arcadier’s streamlined marketplace setup allows you to expand your sales channels, enter new markets, scale efficiently and to maximise your growth.",
    url: "https://www.arcadier.com"
}
const bcaaInfo = {
    name: "BCAA AUTO MARKETPLACE",
    detail: "With BCAA Auto Marketplace, you can buy or sell a vehicle for free! From an easy-to-navigate listing experience to straightforward advice and tools when you need them. Plus, you’ll have a chance to reach over one million BCAA Members and beyond, finding your perfect vehicle match. So, get ready to navigate the used vehicle market with BCAA.",
    url: "https://marketplace.bcaa.com"
}
const shitInfo = {
    name: "8BOX SOLUTIONS",
    detail: "8box Solutions Inc. offers a range of services, such as UI/UX design, website development, ERP system, payroll system, mobile app development, and customized solutions",
    url: "https://8box.solutions"
}


function Project() {
    return (
        <section id="project" className="radius-full padded">
            <h1>PROJECTS I HAVE CONTRIBUTED TO</h1>
            <div className="project-container padded">
                <header>ARCADIER PTE LTD</header>
                <div className="project-info padded gapped">
                    During my tenure at Arcadier from November 2023 to September 2024, I actively contributed to a wide range of projects, including both internal initiatives and client-facing solutions. My role involved collaborating closely with cross-functional teams to develop, enhance, and deploy high-quality software products tailored to meet diverse client needs. My work at Arcadier provided me with the opportunity to apply and expand my expertise in full-stack development, specifically in technologies like Node.js, React.js, and ASP.NET Core, while also deepening my understanding of industry best practices and software development lifecycle processes. These experiences allowed me to deliver impactful results on multiple projects, ensuring they met stringent quality standards and client expectations.
                    <div className="domains flex-column gapped">
                        <ProjectInfo details={arcInfo.detail} name={arcInfo.name} url={arcInfo.url} />
                        <ProjectInfo details={bcaaInfo.detail} name={bcaaInfo.name} url={bcaaInfo.url} />
                    </div>
                </div>
                <div className="flex-column gapped">
                    <div className="domain-view gapped">
                        <iframe className="no-border radius-full" src="https://www.arcadier.com" title="ARCADIER"></iframe>
                        <iframe className="no-border radius-full" src="https://marketplace.bcaa.com" title="BCAA"></iframe>
                    </div>
                </div>
            </div>
            <div className="project-container padded">
                <header>8BOX SOLUTIONS</header>
                <div className="project-info padded gapped">
                    <span>
                        At 8Box Solutions, I gained my initial professional experience, where I had the opportunity to work closely with clients to meet their expectations. This role involved not only direct client interactions but also collaborating extensively with team members. I developed skills in project management, effective communication, and teamwork, which were crucial in delivering high-quality solutions and achieving project goals.<br/><br/>

                        <i>I am currently having difficulty locating specific projects that I worked on during my tenure with the company. I am keen to identify and review these projects to better reflect on my contributions and achievements. </i>
                    </span>
                    <div className="domains flex-column gapped">
                        <ProjectInfo details={shitInfo.detail} name={shitInfo.name} url={shitInfo.url} />
                    </div>
                </div>
                <img className="radius-full shit" src={shitbox} alt="ss1" />
            </div>
            <div className="separator-x"/>
            <GitHub />
        </section>
    );
}

export default Project;