import React from "react";
import classes from "./BestService.module.css";
import Bcard1 from "../../assets/web.jpg";
import Bcard2 from "../../assets/mobileapp.jpg";
import Bcard3 from "../../assets/ui.jpg";
import Radium, { StyleRoot } from "radium";
import useMediaQueries from "media-queries-in-react";
// const data = [
//   {
//     Img: Bcard1,
//     title: "Website Development",
//     subtitle:
//       "We’ve built a lot of web applications across numerous industry verticals. Whether it’s JavaScript, PHP, .NET or Java, our team of web developers is equipped with building CMS, E-commerce and business applications that are of excelling standards."
//   },
//   {
//     Img: Bcard2,
//     title: "Mobile App Development",
//     subtitle:
//       "We’ve built intuitive and interactive apps for businesses, consumers & enterprises that end users love and adapt to very quickly. Our dedicated mobile app developers have found creating iOS and Android apps as a hobby."
//   },
//   {
//     Img: Bcard3,
//     title: "UI/UX Design",
//     subtitle:
//       "Design is always a fundamental contributor to the experience of digital products. Even when you don’t have one, it’s there in the shape of bad design. Our team of creative masterminds not only design user interfaces but also design a digital experience around the users with prime focus on key problems and higher engagement."
//   }
// ];

// const style = {
//   display: " grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gap: "2rem",
//   marginLeft: "3rem",

//   "@media (Width: 375px)": {
//     width: "375px",
//     display: "flex",
//     flexDirection: "column"
//   }
// };

const BestService = () => {
  //   const mediaQueries = useMediaQueries({
  //     narrow: "screen and (min-width:370, max-width: 400px)",
  //     desktop: "(min-width: 1001px)"
  //   });

  //   const flexDirection = mediaQueries.narrow ? "column" : "row";

  return (
    <section id="services">
      <div className={classes.bestServiceContainer}>
        <div className={classes.bestServiceText}>
          <h1>Our Best Services</h1>
          <p>
            We understand that customer satisfaction starts with dependable
            service. We value our clients and offer personal and professional
            services
          </p>
        </div>
        {/* <div style={{ flexDirection }}>
        {data.map(({ Img, title, subtitle }) => {
          return (
            <div className={classes.bestServiceCard}>
              <div className={classes.bestServiceCardImg}>
                <img src={Img} />
              </div>
              <div className={classes.bestServiceCardTitle}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div> */}
        <div className={classes.bestServiceCardContainer}>
          <div className={classes.bestServiceCard}>
            <div className={classes.bestServiceCardImg}>
              <img src={Bcard1} />
            </div>
            <div className={classes.bestServiceCardTitle}>
              <h1>Website Development</h1>
              <p>
                {" "}
                "We’ve built a lot of web applications across numerous industry
                verticals. Whether it’s JavaScript, PHP, .NET or Java, our team
                of web developers is equipped with building CMS, E-commerce and
                business applications that are of excelling standards."
              </p>
            </div>
          </div>
          <div className={classes.bestServiceCard}>
            <div className={classes.bestServiceCardImg}>
              <img src={Bcard2} />
            </div>
            <div className={classes.bestServiceCardTitle}>
              <h1>Mobile App Development</h1>
              <p>
                {" "}
                We’ve built intuitive and interactive apps for businesses,
                consumers & enterprises that end users love and adapt to very
                quickly. Our dedicated mobile app developers have found creating
                iOS and Android apps as a hobby.
              </p>
            </div>
          </div>
          <div className={classes.bestServiceCard}>
            <div className={classes.bestServiceCardImg}>
              <img src={Bcard3} />
            </div>
            <div className={classes.bestServiceCardTitle}>
              <h1>UI/UX Design</h1>
              <p>
                {" "}
                "Design is always a fundamental contributor to the experience of
                digital products. Even when you don’t have one, it’s there in
                the shape of bad design. Our team of creative masterminds not
                only design user interfaces but also design a digital experience
                around the users with prime focus on key problems and higher
                engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestService;
