import React from "react";
import twitter from "./../assets/twitter.png";
import linkedin from "./../assets/linkedin.png";
import github from "./../assets/github.png";
import "./css/BLinks.css";

export default function BLinks() {
  return (
    <div className="links--main">
      <div className="links--main-link">
        <a href="https://www.github.com/theparthshira" target="_blank">
          <img className="contacts--link" src={github} />
        </a>
      </div>

      <div className="links--main-link">
        <a href="https://www.twitter.com/theparthshira" target="_blank">
          <img className="contacts--link" src={twitter} />
        </a>
      </div>

      <div className="links--main-link">
        <a
          href="https://www.linkedin.com/in/parth-shirawala-50a9a9184/"
          target="_blank"
        >
          <img className="contacts--link" src={linkedin} />
        </a>
      </div>
    </div>
  );
}
