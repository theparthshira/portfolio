import React, { useState, useEffect } from "react";
import "./Codeforces.css";
import rating_p from './../../assets/rating.png'

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

  //   return (
  //     <div>
  //       <div></div>

  //       <div>Username : {props.cf_username}</div>

  //       <div>Current Rating : {props.cf_ratings}</div>

  //       <div>Top Rating : {props.cf_top_ratings}</div>

  //       <div>Registered : {time}</div>

  //       <div>Rank : {props.cf_rank}</div>
  //     </div>
  //   );

  return (
    <div>
      <div className="container">
        <div className="cf_profile">
          <img src={props.cf_profile} />
        </div>
        <div className="cf_top_rank">Specialist</div>
        <div className="cf_username">
          <a className="cf_username" target="_blank" href="https://www.codeforces.com/profile/shirawalaparth">shirawalaparth</a>
        </div>
        <div className="cf_details">Parth Shirawala, Surat, India</div>
        <div className="cf_rating"><img src={rating_p} /> Contest rating: <span className="q1">{props.cf_ratings}</span> <span>(max. <span  className="qq">{props.cf_rank}, {props.cf_top_ratings})</span></span></div>
        <div className="cf_reg">Registered: {time}</div>
      </div>
    </div>
  );
}

export default Codeforces;
