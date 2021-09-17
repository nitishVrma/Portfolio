import React from 'react'
import "./topbar.scss"
import {LinkedIn,Mail,GitHub} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">NKV</a>
                    <div className="itemContainer">
                    
                    </div>
                    
                    <div className="itemContainer">
                        <Mail className="icon"></Mail>
                        <span>nitish.kvrma@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <LinkedIn/>
                    <a href="linkedin.com/in/nitishkrvrma"><span>linkdin</span></a>
                    </div>
                    <div className="itemContainer">
                    <GitHub/>
                    <a href="https://github.com/nitishVrma"><span>Github</span></a>
                    
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
