import React from "react";
import Me from "../../assets/Me.jpg"
import "./style.css";

function AboutMe() {
  const skills = [
  'JavaScript',
   'CSS',
   'HTML',
   'Bootstrap',
   'React',
   'JQuery',
   'MySQL', 
   'MongoDB',
   'Express', 
   'Handlebars',
   'OOP',
   'Node.js',
   'Ajax',
   'Git']
  return (
  <div className="row">
      <div className="col-md-9 col-sm-12">
          <div className="card bg-light">
              <div className="card-body">
                <h1 className="card-title" title="About Me"><span id="about">About Me</span></h1>
                <hr></hr>
                <div id="about-me-image">
                  <img src={Me} alt="Jun" className="img-thumbnail shadow" title="Jun"></img>
                </div>
                <div id="about-me">
                  <h3>skills</h3>
                  <div id="skills">
                    {skills.map(skill => (
                      <p key={skill}><span className="skill">{skill}</span></p>
                    ))}
                  </div>
                </div>
                <div style={{clear: 'both'}}>
                  <hr></hr>
                  <p style={{textAlign: "center"}}>Click <a href="Assets/resume.pdf" target="_blank" title="resume">here</a> to view my resume</p>
                </div>
              </div>
          </div>
      </div>
  </div>
  );
}

export default AboutMe;