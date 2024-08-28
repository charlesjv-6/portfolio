import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidePanel from "../components/side-panel";
import Home from "../layouts/home";
import Project from "../layouts/project";

function Index({ themeToggler }) {
  return (
    <main className="padded flex-row">
      <SidePanel themeToggler={themeToggler}/>
      <div className="section-container radius-full scrollable-y">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home/>} />
            <Route path="/project" element={<Project/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default Index;
