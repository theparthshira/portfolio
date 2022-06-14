import React, { useState, useEffect } from "react";
import "./Leetcode.css";
import dp_p from "./../../assets/dp.png";
import jan_p from "./../../assets/jan.png";
import feb_p from "./../../assets/feb.png";
import march_p from "./../../assets/march.png";
import april_p from "./../../assets/april.png";
import may_p from "./../../assets/may.png";

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

function Leetcode(props) {
  if (props.cf_status === false) {
    return (
      <div>
        <h1>Please try again later, Leetcode is down at the moment</h1>
      </div>
    );
  }

  let easy_percent = (props.lc_easy / props.lc_easy_total) * 100;
  let med_percent = (props.lc_medium / props.lc_medium_total) * 100;
  let hard_percent = (props.lc_hard / props.lc_hard_total) * 100;

  let total_prob = props.lc_easy + props.lc_medium + props.lc_hard;

  return (
    <div className="leetcode--main">
      <div className="leetcode--profile">
        <img src={dp_p} />
        <div className="profile--name">
          <a target="_blank" href="https://www.leetcode.com/theparthshira">
            Parth Shirawala
          </a>
        </div>
        <div className="profile--user">
          Bio -> ".... --- .--. . / ..- / ..-. .. -. -.. / .-- .... .- - / ..- /
          .- .-. . / .-.. --- --- -.- .. -. --. / ..-. --- .-. / -....- -....-"
        </div>
      </div>
      <div className="leetcode--details">
        <div class="container">
          <div class="leetcode_pie">
            <svg height="100" width="100" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="#6b6666" />
              <circle
                r="5"
                cx="10"
                cy="10"
                fill="transparent"
                stroke="#ffa116"
                stroke-width="10"
                stroke-dasharray="calc(35 * 31.4 / 100) 31.4"
                transform="rotate(-90) translate(-20)"
              />
              <circle r="9.5" cx="10" cy="10" fill="white" />
              <text x="6" y="9" fill="black" className="first">
                {total_prob}
              </text>

              <text x="6" y="14" fill="#8b8b8b" className="second">
                Solved
              </text>
            </svg>
          </div>
          <div className="leetcode_easy">
            <div className="category">
              Easy{" "}
              <span className="solved">
                {" "}
                <span style={{ visibility: "hidden" }}>_____</span>{" "}
                {props.lc_easy}
              </span>
              <span className="total">/{props.lc_easy_total}</span>
            </div>
            <div className="progress_easy">
              <div
                className="progress-bar_easy"
                style={{ width: `${easy_percent}%` }}
              ></div>
            </div>
          </div>
          <div className="leetcode_med">
            <div className="category">
              Medium{" "}
              <span className="solved">
                {" "}
                <span style={{ visibility: "hidden" }}>___</span>{" "}
                {props.lc_medium}
              </span>
              <span className="total">/{props.lc_medium_total}</span>
            </div>
            <div className="progress_med">
              <div
                className="progress-bar_med"
                style={{ width: `${med_percent}%` }}
              ></div>
            </div>
          </div>
          <div className="leetcode_hard">
            <div className="category">
              Hard{" "}
              <span className="solved">
                {" "}
                <span style={{ visibility: "hidden" }}>_____</span>{" "}
                {props.lc_hard}
              </span>
              <span className="total">/{props.lc_hard_total}</span>
            </div>
            <div className="progress_hard">
              <div
                className="progress-bar_hard"
                style={{ width: `${hard_percent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="leetcode--badges">
        <img src={jan_p} />
        <img src={feb_p} />
        <img src={march_p} />
        <img src={april_p} />
        <img src={may_p} />
      </div>
    </div>
  );
}

export default Leetcode;
// #eff0f2 leetcode backgroud
