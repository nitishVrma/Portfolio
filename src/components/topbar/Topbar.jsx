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
                    
                        {/* <Person className="icon"></Person> */}
                        {/* <span>+342 2234 234</span> */}
                    </div>
                    
                    <div className="itemContainer">
                        <Mail className="icon"></Mail>
                        <span>nitish.kvrma@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <LinkedIn/>
                    <span>linkdin</span>
                    </div>
                    <div className="itemContainer">
                    <GitHub/>
                    <span>Github</span>
                    
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
