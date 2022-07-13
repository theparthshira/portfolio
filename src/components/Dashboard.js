import React,{ useState,useEffect } from "react"
import Codeforces from "./sub-components/Codeforces";
import Codechef from "./sub-components/Codechef";
import Leetcode from "./sub-components/Leetcode";
import BLinks from "./BLinks";
import './css/Dashboard.css'

export default function Dashboard() {
    const [active, setActive] = useState(1);
    const [cfapi,setCf] = useState({});
    const [lcapi,setLc] = useState({});

    // ==>> Set Up Codeforces Data <<==
    // =====================================================================================

        useEffect(() => {
            fetch("https://codeforces.com/api/user.info?handles=shirawalaparth")
                .then(response => response.json())
                .then(messages => setCf(messages));
        },[])

        let cf_ratings,cf_top_ratings,cf_registered,cf_profile,cf_rank,cf_username
        let cf_status=false

        if(cfapi.status==="OK") {
            cf_ratings = cfapi.result[0].rating
            cf_top_ratings = cfapi.result[0].maxRating
            cf_registered = cfapi.result[0].registrationTimeSeconds
            cf_profile = cfapi.result[0].titlePhoto
            cf_rank = cfapi.result[0].maxRank
            cf_username = cfapi.result[0].handle
            // console.log(cf_profile);
            cf_status=true
        }

    // =====================================================================================

    // ==>> Set Up Leetcode Data <<==
    // =====================================================================================

        useEffect(() => {
            z
        },[])

        let lc_status=false;

        let lc_easy,lc_medium,lc_hard,lc_easy_total,lc_medium_total,lc_hard_total
        let lc_username = "theparthshira"

        console.log(lcapi);

        if(lcapi.status==="success") {
            lc_easy = lcapi.easySolved
            lc_medium = lcapi.mediumSolved
            lc_hard = lcapi.hardSolved
            lc_easy_total = lcapi.totalEasy
            lc_medium_total = lcapi.totalMedium
            lc_hard_total = lcapi.totalHard
            lc_status=true;
        }

    // =====================================================================================



    function func_cf() {
        setActive(prevState => 1);
        console.log(active);
    }

    function func_cc() {
        setActive(prevState => 2);
        console.log(active);
    }

    function func_lc() {
        setActive(prevState => 3)
        console.log(active)
    }

        let module

        if(active===1) {
            module=<Codeforces
            cf_ratings = {cf_ratings}
            cf_top_ratings = {cf_top_ratings}
            cf_registered = {cf_registered}
            cf_profile = {cf_profile}
            cf_rank = {cf_rank}
            cf_username = {cf_username}
            cf_status = {cf_status}
            />
        } else if(active===2) {
            module=<Codechef />
        } else {
            module=<Leetcode
            lc_easy = {lc_easy}
            lc_medium = {lc_medium}
            lc_hard = {lc_hard}
            lc_easy_total = {lc_easy_total}
            lc_medium_total = {lc_medium_total}
            lc_hard_total = {lc_hard_total}
            lc_username = {lc_username}
            />
        }

        let error_1 = "WORK'S DATA: ";

    return (
        <div className="dash--main">
            <h1 className="dash--main--head">{error_1}</h1>
            <BLinks />
            <ul className="dash--menu">
                <div onClick={func_cf} className="dash--menu1"> > Codeforces</div>
                <div onClick={func_cc} className="dash--menu2"> > Codechef</div>
                <div onClick={func_lc} className="dash--menu3"> > Leetcode</div>
                <div className="dash--final">{module}</div>
            </ul>

        </div>
    )
}
