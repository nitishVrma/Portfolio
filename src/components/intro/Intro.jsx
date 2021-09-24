import React from 'react'
import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
           showCursor: true,
           backDelay: 1000,
           strings:["Full Stack Web Developer",] 
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/nitish.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi There, I'm
                    </h2>
                    <h1>Nitish Verma</h1>
                    
                    <h3><span ref = {textRef}></span></h3>
                    <a href="https://drive.google.com/file/d/1QYv5f9q4F68-X4SWX--c67kwy-qX9hB9/view?usp=sharing"><button>Resume</button></a>
                    
                </div>
                
            </div>
            
        </div>
    )
}
