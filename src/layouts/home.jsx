import React from "react";
import Main from "../components/profile/main";
import Skill from "../components/profile/skills";
import ColoringGame from "../components/coloring-game";
import QuickContact from "../components/profile/contact/quick-contact";

function Home() {
    return (
        <section id="home" className="radius-full padded">
            <Main />
            <QuickContact />
            <div className="separator-x"/>
            <Skill />
        </section>
    );
}

export default Home;
