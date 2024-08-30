import React from "react";
import Main from "../components/profile/main";
import Skill from "../components/profile/skills";
import QuickContact from "../components/profile/contact/quick-contact";
import TicTacToe from "../components/tic-tac-toe";

function Home() {
    return (
        <section id="home" className="radius-full padded">
            <Main />
            <QuickContact />
            <div className="separator-x"/>
            <TicTacToe />
            <Skill />
        </section>
    );
}

export default Home;
