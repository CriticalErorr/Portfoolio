import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
        ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Illinois at Urbana-Champaign</h3>
                <p className="info">
                  B.S. Physics - Technical Focus in Computer Science
                  <span>•</span> <em className="date">Jan 2016 - May 2018</em>
                </p>
                <p>
                  Helped organize Meditation Student Organization and
                  participated in Technological Entrepeneurship Program.
                </p>
                <p>
                  Coursework includes Artificial Intelligence, Circuits,
                  Subatomic Physics, Special Relativity, Condensed Matter
                  Physics, Data Structures, Linear Algebra, and Fundraising from
                  Bootstrapping to Venture Capital
                </p>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Tel Aviv University - Coller School of Management</h3>
                <p className="info">
                  Entrepreneurship and Innovation <span>•</span>{" "}
                  <em className="date">Jun 2018</em>
                </p>
                <p>Received training in business and negotiation strategies from professors and entrepreneurs in residence</p>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Education */}
        {/* Work
        ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.sangcash.com/">SangCash</a></h3>
                <p className="info">
                  Chief Technology Officer <span>•</span>{" "}
                  <em className="date">Mar 2023 - Present</em>
                </p>
                <p>Technical Co-Founder and CTO for an early stage start-up helping songwriters get paid more money, faster and more easily using web3.</p>
                <ul>
                <ul>
                  <li>
                    - Developing a proof of concept to demo for investors.
                  </li>

                  <li>
                    - Designing roadmap and systems architecture for future
                    growth.
                  </li>

                  <li>
                    - Collaborating with CEO to determine technical lift for
                    overall vision and communicating relevant pieces of our tech
                    stack in a simplified manner.
                  </li>
                </ul>
                </ul>
              </div>
            </div>{" "}
            {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.centillion.ai/">Centillion</a></h3>
                <p className="info">
                  Technical Operations Manager <span>•</span>{" "}
                  <em className="date">Feb 2022 - June 2022</em>
                </p>
                <p>
                  Oversaw technical operations across the company working with
                  our technical solutions providers, contractors, and client's
                  technical points of contact.
                </p>
                <ul>
                  <ul>
                    <li>
                      - Managed a team of engineers responsible for developing
                      an iOS application.
                    </li>

                    <li>
                      - Collaborated with sales team to ensure product
                      development aligned with customer needs.
                    </li>

                    <li>
                      - Developed and implemented operational procedures to
                      improve efficiency.
                    </li>
                    <li>
                      - Coordinated with executive team to quickly and
                      accurately launch deliverables for customers.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>{" "}
            {/* item end */}
            <p />
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://www.epic.com/">Epic</a></h3>
                <p className="info">
                  Technical Solutions Engineer <span>•</span>{" "}
                  <em className="date">Sep 2018 - Mar 2021</em>
                </p>
                <p>
                  Supported Hospital Billing IT staff at various organizations
                  and helped them configure the system, solve technical
                  problems, and debugged and wrote code in Intersystems Cache.
                </p>
                <ul>
                  <ul>
                    <li>
                      - Worked closely with clients to provide technical
                      solutions to their healthcare software needs.{" "}
                    </li>
                    <li>
                      - Developed and implemented software solutions to meet
                      client needs.{" "}
                    </li>
                    <li>
                      - Conducted training sessions to ensure clients are able
                      to use software efficiently and effectively.{" "}
                    </li>
                    <li>
                      - Wrote technical documentation to communicate software
                      features, bugs, and usage for customers and team members.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>{" "}
            {/* item end */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End Work */}
        {/* Skills
        ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <p>
              Able to learn complex technical systems on the fly. Experience
              building front end, back end, blockchain, mobile apps, web
              scrapers and ad pixels.
            </p>
            <div className="bars">
              <ul className="skills">
                <li>
                  <span className="bar-expand photoshop" />
                  <em>HTML5/CSS/React.js</em>
                </li>
                <li>
                  <span className="bar-expand illustrator" />
                  <em>MQTT - IoT Protocol</em>
                </li>
                <li>
                  <span className="bar-expand wordpress" />
                  <em>Solidity</em>
                </li>
                <li>
                  <span className="bar-expand css" />
                  <em>Python</em>
                </li>
                <li>
                  <span className="bar-expand html5" />
                  <em>AWS Architecture</em>
                </li>
              </ul>
            </div>
            {/* end skill-bars */}
          </div>{" "}
          {/* main-col end */}
        </div>{" "}
        {/* End skills */}
      </section>
    );
  }
}
