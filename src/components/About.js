import React from "react";
import BLinks from "./BLinks";
import "./css/About.css";

export default function About() {
  return (
    <article className="about--main">
      <h1 className="about--main-head">ABOUT</h1>

      <br />
      <div className="about--main-para">
        <div className="about--main-point">
          Hi! 👋 I'm Parth (pronounced "paah-earth"). And I make and wants to
          make awsome things for awsome people. I like to learn new stuffs and
          to apply it. The joy of seeing something which was in your brain and
          being able{" "}
          <a href="https://www.instagram.com/theparthshira" target="_blank">
            Instagram
          </a>{" "}
          and{" "}
          <a href="https://www.twitter.com/theparthshira" target="_blank">
            Twitter
          </a>
          .
        </div>
        <br />
        <div className="about--main-point">
          I'm a front-end web developer and currently learning back-end with
          Node.js (as of mid-June). Currently I'm looking for a job mainly
          front-end as said earlier that I'm learning back-end right now.
        </div>
        <br />
        <div className="about--main-point">
          As code is a bridge through which we can construct many great tools
          and applications which can solve many great problems of humans! To
          code efficiently, I'm also giving much of a significance to learn data
          stuctures and algorithms which you can check out by my{" "}
          <a href="https://www.leetcode.com/theparthshira" target="_blank">
            leetcode
          </a>
          ,
          <a
            href="https://www.codeforces.com/profile/shirawalaparth"
            target="_blank"
          >
            codeforces
          </a>{" "}
          and{" "}
          <a href="https://www.codechef.com/users/mighty_8559" target="_blank">
            codechef
          </a>{" "}
          profiles.
        </div>
        <br />
        <div className="about--main-point">
          Away from the keyboard in my "spare" time I could be doing any number
          of things. I'm pretty much in CS:GO competitive scene and also like to
          read(pretty much audiobooks). Currently reading the{" "}
          <a
            href="https://www.audible.in/pd/Harry-Potter-and-the-Order-of-the-Phoenix-Book-5-Audiobook/B079N7SXH4?qid=1655139811&sr=1-4&ref=a_search_c3_lProduct_1_4&pf_rd_p=2d02bc98-4366-4f94-99d9-5e898cda0766&pf_rd_r=NH72VGSJEQQEW81YQVK1"
            target="_blank"
          >
            fifth
          </a>{" "}
          book of the Harry Potter series.
        </div>
        <br />
        <div className="about--main-point">
          Got an opportunity to discuss? A project you'd like to discuss? Or
          maybe just want to say "hi"?{" "}
          <a href="https://theparthshira.netlify.app/contacts" target="_blank">
            Reach out!
          </a>
          !
        </div>
      </div>
      <BLinks />
    </article>
  );
}
