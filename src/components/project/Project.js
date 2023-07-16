import React from "react";
import classes from "./Project.module.css";
import card1 from "../../assets/leasecircle.png";
import card2 from "../../assets/blackcopper.png";
import card3 from "../../assets/first-electric.jpg";
import card4 from "../../assets/barlimor.jpg";
import card5 from "../../assets/lavista.jpg";
import card6 from "../../assets/deveote.jpg";
import { Autoplay } from "swiper/modules";

// const data = [
//   {
//     Img: card1,
//     title: "LeaseCircle",
//     subtitle: "A loan Platform"
//   },
//   {
//     Img: card2,
//     title: "BlackCopper",
//     subtitle: "Financial service platform"
//   },
//   {
//     Img: card3,
//     title: "First Electric",
//     subtitle: "A renewable energu company"
//   },
//   {
//     Img: card4,
//     title: "Barlimor",
//     subtitle: "A Cleaning company"
//   },
//   {
//     Img: card5,
//     title: "La Vista",
//     subtitle: "A restaurant and lounge"
//   },
//   {
//     Img: card6,
//     title: "Deveote",
//     subtitle: "Our very own website"
//   }
// ];

const Project = () => {
  return (
    <section id="portfolio">
      <div className={classes.projectContainer}>
        <div className={classes.projectText}>
          <h1>Our Recent Projects</h1>
          <p>Some of our recent projects we are proud of</p>
        </div>

        {/* <div
        style={{
          display: " grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem"
        }}
      >
        {data.map(({ Img, title, subtitle }) => {
          return (
            <div className={classes.projectCard}>
              <div className={classes.cardTitle}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
              <div className={classes.cardContainer}>
                <img src={Img} />
              </div>
            </div>
          );
        })}
      </div> */}
        <div className={classes.projectCardContainer}>
          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>LeaseCycle</h1>
              <p>A loan platform</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card1} />
            </div>
          </div>

          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>Black Copper</h1>
              <p>Financial Service Platform</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card2} />
            </div>
          </div>

          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>First Electric</h1>
              <p>A renewable energy company</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card3} />
            </div>
          </div>

          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>Barlimor</h1>
              <p>A cleaning Company</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card4} />
            </div>
          </div>

          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>La Vista</h1>
              <p>A restaurant and lounge</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card5} />
            </div>
          </div>

          <div className={classes.projectCard}>
            <div className={classes.cardTitle}>
              <h1>Deveote</h1>
              <p>Our Very own website</p>
            </div>
            <div className={classes.cardContainer}>
              <img src={card6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
