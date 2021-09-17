import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className="about" id="about">
            <br />
            <br />
            <h1 >About Me</h1>
            <div className="aboutMain">
                <div className="aboutLeft">
                    <img src="./assets/web_development_zhfivq.svg" alt="" />
                </div>
                <div className="aboutRight">
                    <h1 style={{ color: "#c5c6c7"}}>I'm Nitish, a <span style={{ color: "#66fcf1"}}>Full Stack Web Developer</span></h1>
                    <br />
                    <p>A passionate Developer, with strong administrative and communication skills, good attention to detail and with the ability to write efficient code using MERN Stack.</p>
                    <br />

                    <p>I have been developing Web Apps for over 7 months now. Well versed in coding using Javascript and its frameworks.</p>
                    <br />
                    <p>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
                </div>
            </div>
        </div>
    )
}

export default About