import React from "react";
import Me from "../../assets/Me.jpg"
import github from "../../assets/github_white.png"
import linkedin from "../../assets/linkedin_white.png"
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className="home-container">
            <div className = "row">
                <div className="card-body">
                    <div id="image">
                        <img src={Me} alt="Jun" className="img-thumbnail rounded-circle" title="Jun"></img>
                    </div>
                </div>
            </div>
            <h1 id="home">Jun Hwang</h1>
            <h5 id="role">Full Stack Web Developer </h5>
            <div id="social">
                <a href="https://github.com/jhwang2525" target="_blank" rel="noreferrer"><img src={github} alt="github" className="social-image"></img></a>{' '}
                <a href="https://www.linkedin.com/in/jun-hwang-834951207/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="social-image"></img></a>
            </div>
        </div>
    </div>
    );
}

export default HomeItems;