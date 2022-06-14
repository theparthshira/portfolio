import React, { useState, useEffect } from "react";
import "./Codeforces.css";
import rating_p from "./../../assets/rating.png";
import mail_p from "./../../assets/mail.png";

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year;
  return time;
}

function Codeforces(props) {
  if (props.cf_status === false) {
    return (
      <div>
        <h1>Please try again later, codeforces is down at the moment</h1>
      </div>
    );
  }

  let time = timeConverter(props.cf_registered);

  return (
    <div className>
      <div className="parent">
        <div className="cf_top_rank">Specialist</div>
        <div className="cf_username">
          <a
            className="cf_username"
            target="_blank"
            href="https://www.codeforces.com/profile/shirawalaparth"
          >
            shirawalaparth
          </a>
        </div>
        <div className="cf_details">Parth Shirawala, Surat, India</div>
        <div className="cf_rating">
          <img src={rating_p} />{" "}
          <div>
            Contest rating: <span className="q1">{props.cf_ratings}</span>{" "}
            <span className="q2">
              (max.{" "}
              <span className="qq">
                {props.cf_rank}, {props.cf_top_ratings})
              </span>
            </span>
          </div>
        </div>
        <div className="cf_mail">
          <img src={mail_p} />
          <div>shirawalaparth@gmail.com</div>
        </div>
        <div className="cf_reg">Registered: {time}</div>
        <div className="cf_con">
          <img src={mail_p} />
          <div>
            <a href="https://codeforces.com/usertalk/with/shirawalaparth">
              Talks
            </a>{" "}
            |{" "}
            <a href="https://codeforces.com/usertalk?other=shirawalaparth">
              Send message
            </a>
          </div>
        </div>
        <div className="cf_profile">
          <img src={props.cf_profile} />
        </div>
      </div>
    </div>
  );
}

export default Codeforces;
