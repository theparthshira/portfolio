import React from "react"
import leetcode from './../assets/leetcode.png';
import codeforces from './../assets/codeforces.png';
import codechef from './../assets/codechef.png';
import twitter from './../assets/twitter.png';
import linkedin from './../assets/linkedin.png';
import github from './../assets/github.png';
import background from './../assets/background.png';
import mainleft from './../assets/mainleft.png';
import './css/MainApp.css'
import { useHistory } from 'react-router-dom';
import BLinks from "./BLinks";

export default function MainApp() {
    let history=useHistory();
    return (
        <div>            
            <BLinks />

            <div className="main--center">
                <div className="main--c--parth">PARTH</div>
                <div className="main--c--shirawala">SHIRAWALA</div>
            </div>

            <div className="main--quote">
                <div>Tech enthusiast with hardcore consistency!</div>
            </div>
        </div>
    )
}