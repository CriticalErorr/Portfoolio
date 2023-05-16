import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Rational Hippie, Indie Hacker, Pragmatic Idealist. First
              generation American born and raised in the midwest. Worked the
              corporate 9-5 until the golden handcuffs felt too heavy (and I
              paid off all my high interest debt) and did a six month roadtrip
              to 20 National Parks in 2021. Since then I've been a developer,
              consultant, founder, and nomad living on my terms and building
              businesses to achieve financial freedom. Currently Angel Squad
              Member and Chicago Local Lead @{" "}
              <a href="https://www.hustlefund.vc/squad">Hustle Fund VC</a>, CTO
              @ <a href="https://www.sangcash.com">SangCash</a>, and Esoteric
              Thinkboi @{" "}
              <a href="https://www.twitter.com/abusyhippie">Twitter</a>{" "}
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Bart Hofkin</span>
                  <br />
                  <span>
                    Chicago, IL
                    <br />
                    United States
                  </span>
                  <br />
                  <span>(630)296-7466</span>
                  <br />
                  <span>bart@hofkin.me</span>
                  <br />
                  <span>
                    <a href="https://www.upwork.com/freelancers/~01f084616d9594ef10?s=1017484851352698996">
                      <b>Hire me on Upwork</b>
                    </a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/resume.pdf" className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>{" "}
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
