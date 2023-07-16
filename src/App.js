import About from "./components/About/About";
import Header from "./components/headers/Header";
import classes from "./App.module.css";
import Service from "./components/Services/Service";
import Specialization from "./components/specialization/Specialization";
import Project from "./components/project/Project";
import BestService from "./components/Bestservice/BestService";
import Pricing from "./components/pricing/Pricing";
import Extras from "./components/extras/Extras";
import Contact from "./components/contact/Contact";
import Call from "./components/call/Call";
import Footer from "./components/footer/Footer";
import Navbar from "./components/sidebar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={classes.main}>
      <div className={classes.headerMain}>
        <Navbar />
        <Header />
      </div>

      <div className={classes.contents}>
        <About />
        <Service />
        <Specialization />
        <Project />
        <BestService />
        <Pricing />
        <Extras />
        <Contact />
        <Call />
        <Footer />
      </div>
    </div>
  );
}

export default App;
