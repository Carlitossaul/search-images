import React, { useEffect } from "react";
import style from "./About.module.css";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <p>My name is Carlos Lovey. I am a Developer Web Full Stack</p>
        <h1>Contact</h1>
        <div className={style.links}>
          <a
            target="_blank"
            className={style.link}
            href="https://www.linkedin.com/in/carloslovey"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icon} />
            LinkedIn:My professional profile on LinkedIn, where you can find
            information about my work experience and skills. Click here!
          </a>
          <a
            target="_blank"
            className={style.link}
            href="https://github.com/Carlitossaul"
            rel="noopener noreferrer"
          >
            <GoMarkGithub className={style.icon} />
            GitHub: "My GitHub profile, where I share some of my projects and
            collaborations with the developer community. Click here!
          </a>
          <a
            target="_blank"
            className={style.link}
            href="https://carloslovey.vercel.app/"
            rel="noopener noreferrer"
          >
            <BsBoxArrowUpRight className={style.icon} />
            Portfolio: My portfolio of projects, where you can see some of the
            work I have done and my work style. Click here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
