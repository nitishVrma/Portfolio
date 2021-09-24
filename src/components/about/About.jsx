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
                    <p>A passionate developer, with strong problem solving skills, good attention to detail and with the ability to write efficient code using MERN Stack.</p>
                    <br />

                    <p>I have been developing Web Apps for over 7 months now. I am well versed in coding using Javascript and ReactJS.</p>
                    <br />
                    <p>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</p>
                    <br />
                    {/* <ul>Apart from coding:
                        <li>I like to play Basket Ball</li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default About