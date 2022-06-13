import React from "react";
import BLinks from "./BLinks";
import "./css/Contacts.css";
import cont from "./../assets/cont.png";

export default function Contacts() {
  return (
    <article className="contacts">
      <h1 className="contacts--ping">PING ME!</h1>
      <div className="contacts--desc--1">
        <img className="contacts--img" src={cont} />
        <div className="contacts--para">
          Want to say "Hey!"? Got something you'd like to ask? New project or
          opportunity? Want to hire me? Ping me!
        </div>
        <div className="contacts--para">
          Use the links below. Or, for a quicker response, ping me over on{" "}
          <span>
            <a
              className="contacts--twitter"
              target="_blank"
              href="https://www.twitter.com/theParthShira"
            >
              Twitter
            </a>
          </span>
          .
        </div>
        <div className="contacts--para">
          Alternatively, shoot me an email at{" "}
          <a
            className="contacts--twitter"
            target="_blank"
            href="mailto:theparthshira@gmail.com"
          >
            theparthshira@gmail.com
          </a>
          .
        </div>
      </div>
      <BLinks />
    </article>
  );
}
