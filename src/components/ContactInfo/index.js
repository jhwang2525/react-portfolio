import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

import "./style.css";

function ContactInfo() {
  return (
    <div className="col-md-5">
        <div className="card bg-light shadow">
            <div className="card-body">
                <h3 className="contact_details">Email</h3>
                <a href="jhwang">jhwang2525@gmail.com</a>
                <hr></hr>
                <h3 className="contact_details">Phone</h3>
                <p>(714) 476-7190</p>
                <hr></hr>
                <a href="https://github.com/jhwang2525" target="_blank" rel="noreferrer"><img src={github} alt="github" class="social-icons"></img></a>{' '}
                <a href="https://www.linkedin.com/in/jun-hwang-834951207/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" class="social-icons"></img></a>
            </div>
        </div>  
    </div>
  );
}

export default ContactInfo;