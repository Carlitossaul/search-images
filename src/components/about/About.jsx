import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <h1>About this website</h1>
        <p>
          This website is a project that I created to practice what I was
          learning in my front-end classes when I was studying module two at
          Henry. I wanted to create an app using React and Redux, but the most
          important thing and what I cared about in those days was learning how
          to consume data from APIs. This is how this project started, and with
          time, it became important to me because I use it to find images for my
          new projects.
        </p>
        <h1>About me</h1>
        <p>
          My name is Carlos Lovey. This section is still under development, but
          I hope to add soon my portfolio, LinkedIn, and Github.
        </p>
      </div>
    </div>
  );
};

export default About;
