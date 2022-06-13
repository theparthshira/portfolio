import React, { useState,useEffect } from 'react'

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

function Codeforces(props) {

    if(props.cf_status === false) {

        return (
            <div>
                <h1>Please try again later, codeforces is down at the moment</h1>
            </div>
        )

    }

    let time=timeConverter(props.cf_registered) 
    
    return (
        <div>
            <div><img src={props.cf_profile} /></div>   

            <div>Username : {props.cf_username}</div>
            
            <div>Current Rating : {props.cf_ratings}</div>

            <div>Top Rating : {props.cf_top_ratings}</div>

            <div>Registered : {time}</div>            

            <div>Rank : {props.cf_rank}</div>
        </div>
    )
}

export default Codeforces
