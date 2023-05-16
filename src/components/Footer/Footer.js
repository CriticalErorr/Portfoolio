import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li>
                <a href="https://twitter.com/abusyhippie">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/barthofkin/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/abusyhippie">
                  <i className="fa fa-github" />
                </a>
              </li>
              {/* <li><a href="#"><i className="fa fa-dribbble" /></a></li> */}
            </ul>
            <ul className="copyright">
              <div>
                <li>
                  <b>BTC Address:</b>{" "}
                  <a href="bitcoin:3QPaGsstbnSyWBtD3Cicj5scGFnfAhEcJf">
                    3QPaGsstbnSyWBtD3Cicj5scGFnfAhEcJf
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <b>ETH Address:</b>{" "}
                  <a href="ethereum:0xD481E631717E6D422d4E44327506D766b7E3d5a6">
                    0xD481E631717E6D422d4E44327506D766b7E3d5a6
                  </a>
                </li>
              </div>
              <div>
                <li>
                  <b>SOL Address:</b>{" "}
                  <a href="solana:7dyBzGYEP2DGFUr9DwevtuDvJb7MFYMU2SpqtfXk8Waj">
                    7dyBzGYEP2DGFUr9DwevtuDvJb7MFYMU2SpqtfXk8Waj
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
