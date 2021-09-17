import React from 'react'
import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/nkv.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi There, I'm
                    </h2>
                    <h1>Nitish verma</h1>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            
        </div>
    )
}
