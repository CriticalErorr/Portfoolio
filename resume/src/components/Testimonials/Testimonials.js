import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    {/* <blockquote> */}
                    <p>
                      I worked with Bart developing software on AWS. He is
                      quick, intuitive and effective at creating the right
                      security and credentials, developing sophisticated
                      software and testing the results. For example, he
                      developed two Lamba serverless applications in python in a
                      week, one to capture and store an RSS feed and the other
                      to handle output from a high traffic webserver in the form
                      of pixel image requests. He is one of the quickest and
                      most effective programmers I have ever worked with. Highly
                      recommended.
                    </p>
                    <cite>John D</cite>
                    {/* </blockquote> */}
                  </li>{" "}
                  {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>
                        Bart is the ultimate technical advisor. His technical
                        knowledge, empathy for the end user and ability to
                        translate complex concepts and business models into
                        easily digestible explanations and examples has allowed
                        my company to accelerate towards product-market fit.
                        Bart is conversational and easy to get along with which
                        makes working with him a dream. He is curious about
                        technology, markets, and companies making him always
                        interested in staying up to date and researching the
                        different topics. I would like to highly recommend Bart
                        for any future projects you are looking to hire for.
                      </p>
                      <cite>Stephen D</cite>
                    </blockquote>
                  </li>{" "}
                  {/* slide ends */}
                </ul>
              </div>{" "}
              {/* div.flexslider ends */}
            </div>{" "}
            {/* div.flex-container ends */}
          </div>{" "}
          {/* row ends */}
        </div>{" "}
        {/* text-container ends */}
      </section>
    );
  }
}
