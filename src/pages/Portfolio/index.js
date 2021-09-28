import React from "react";
import Project from "../../components/Project";

function Portfolio(props) {
  //   const imagePath = "./Assets/Images/"
  const projects = [
    {
      name: "Supply Interchange LA",
      appLink: "https://supply-interchange-la.herokuapp.com/",
      githubLink: "https://github.com/AlbertRyanFonseca/project-3-mern/tree/develop",
    },
    {
      name: "Password Generator",
      appLink: " https://jhwang2525.github.io/password-generator/",
      githubLink: "https://github.com/jhwang2525/password-generator",
    },
    {
      name: "Coding Quiz",
      appLink: "https://jhwang2525.github.io/Jun-s-Code-Quiz/",
      githubLink: "https://github.com/jhwang2525/Jun-s-Code-Quiz",
    },
    {
      name: "Work Day Scheduler",
      appLink: "https://jhwang2525.github.io/work-day-scheduler/",
      githubLink: "https://github.com/jhwang2525/work-day-scheduler",
    },
    {
      name: "Weather Dashboard",
      appLink: "https://jhwang2525.github.io/weather-dashboard/",
      githubLink: "https://github.com/jhwang2525/weather-dashboard",
    },
    {
      name: "Budget Tracker",
      appLink: "https://budgettrackjs.herokuapp.com/",
      githubLink: "https://github.com/jhwang2525/budget-tracker",
    },
  ];
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title" title="Portfolio">
              <span id="portfolio">Portfolio</span>
            </h1>
            <hr></hr>
            <Project projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}
 // eslint-disable-next-line
export default Portfolio;
