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

function Leetcode(props) {  
    if(props.cf_status === false) {

        return (
            <div>
                <h1>Please try again later, Leetcode is down at the moment</h1>
            </div>
        )

    }
    
    return (
        <div>            

            <div>Username : {props.lc_username}</div>
            
            <div>Easy Solved : {props.lc_easy}</div>

            <div>Medium Solved : {props.lc_medium}</div>

            <div>Hard Solved : {props.lc_hard}</div>   

            <div>Total Solved : {props.lc_hard + props.lc_medium + props.lc_easy}</div>   
            
        </div>
    )
}

export default Leetcode
