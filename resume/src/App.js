import React, { Component } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resune";
//import Portfolio from "./components/Portfolio/Portfolio";
//import Testimonials from  './components/Testimonials/Testimonials';
import ContactUs from "./components//Contact/Contact";
import Footer from "./components/Footer/Footer";
import resumeData from "./components/Resume/resumeData";

//<Testimonials />
////<Portfolio />

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
