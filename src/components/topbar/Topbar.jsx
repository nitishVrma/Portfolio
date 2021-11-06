import React from 'react'
import "./topbar.scss"
import {Description} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src="logo.png" alt="" /></a>
                    <div className="itemContainer">
                    
                    </div>
                    
                    {/* <div className="itemContainer">
                    <GitHub/>
                    <a href="https://github.com/nitishVrma"><span>Github</span></a>
                    
                    </div> */}
                    <div className="itemContainer">
                    <a href="https://drive.google.com/drive/folders/1HhXt8Fc-p9noSnlXOKO_wHeKXZpj0Ldu?usp=sharing">
                    <Description/>
                     <span>Resume</span></a>
                    </div>
                    
                    <div className="itemContainer">
                    <a href="#about"><span>About</span></a>
                    </div>
                    <div className="itemContainer">
                    <a href="#works"><span>Projects</span></a>
                    </div>
                    <div className="itemContainer">
                    <a href="#skills"><span>Skills</span></a>
                    </div>
                    <div className="itemContainer">
                    <a href="#contact"><span>Contact</span></a>
                    </div>
                </div>
                <div className="right">
                    
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
