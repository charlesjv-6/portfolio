import React, { useState, useEffect } from 'react';

function SidePanel({ themeToggler }) {
    const pathname = window.location.pathname.replace('/', '');
    const [focus, setFocus] = useState(pathname || 'home');

    const changeFocusOnClick = focus => {
        setFocus(focus);
        window.location.href = '/' + (focus === "home" ? "" : focus);
    };

    const handleClick = ()=> {
        themeToggler();
        document.querySelector('.theme-toggle').classList.toggle('rotate');
    }
    return (
        <section className='side-panel padded radius-full'>
            <div className='icon-container flex-column'>
                <button className='radius-full transparent no-border theme-toggle' onClick={handleClick}>
                    <svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <g id="Layer_2" data-name="Layer 2"> 
                                <g id="Icons">
                                    <g>
                                        <g> 
                                            <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"></path> 
                                            <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"></path> 
                                        </g> 
                                    </g> 
                                </g> 
                            </g> 
                        </g>
                    </svg>
                </button>
                <button className={`radius-full transparent no-border ${focus === "home" ? 'selected' : ''}`} onClick={()=>changeFocusOnClick("home")}>
                    <svg width="42px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                <button className={`radius-full transparent no-border ${focus === "project" ? 'selected' : ''}`} onClick={()=>changeFocusOnClick("project")}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M5.4 2h13.2A3.4 3.4 0 0 1 22 5.4v13.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 18.6V5.4A3.4 3.4 0 0 1 5.4 2ZM7 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm6 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0V6Z"></path></g></svg>
                </button>
                <button className={`radius-full transparent no-border ${focus === "journal" ? 'selected' : 'no-display'}`} onClick={()=>changeFocusOnClick("journal")}>
                    <svg width="32px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-o</title><path d="M290,32H144A64.07,64.07,0,0,0,80,96V416a64.07,64.07,0,0,0,64,64H290Z"></path><path d="M368,32H350V480h18a64.07,64.07,0,0,0,64-64V96A64.07,64.07,0,0,0,368,32Z"></path></g></svg>
                </button>
            </div>
        </section>
    );
}

export default SidePanel;
