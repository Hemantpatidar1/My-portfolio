import React from "react";
import { config } from "../config";

export default function About() {
  const mySkills = config.mySkills;
  return (
    <div
      className="flex-fill p-2 container-fluid row justify-content-center"
      style={{
        backgroundImage: `url(${require("../Images/about-bg.jpg")})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="col-lg-8 col-sm-10 col-11 fs-6 text-white-50 lh-sm">
        <div className="d-flex flex-wrap mt-4">
          <img
            src={require("../Images/profile2.jpg")}
            alt="profile"
            className="rounded-circle me-2"
            style={{ maxWidth: "150px" }}
          />
          <h2 className="text-white h2 openSans my-2 align-self-end">
            Hi! I am Hemant Patidar.
          </h2>
        </div>

        <p className="mt-3">
          I am a passionate web developer with a strong enthusiasm for creating
          captivating and user-friendly websites. With a solid foundation in
          Computer Science Engineering Department, currently pursuing my B.tech from NIT
          Manipur, I possess a deep understanding of the technical aspects of
          web development.I am passionate to learn new technologies like web3.
        </p>

        <h4 className="openSans my-2 h5 text-info lh-lg">Education:</h4>
        <ul className="ms-4 fw-bold">
          <li>
            Bachelor of Technology in Computer Science and Engineering Department
            from NIT Manipur.
          </li>
         
          <li>
            12th Grade from Shiv Jyoti Sr. sec. School, Kota.
          </li>
          <li>
            10th Grade from Flower kids Sr. sec. School, Sagwara.
          </li>
        </ul>

        <p className="my-2">
          Throughout my academic journey, I have gained expertise in various web
          technologies and frameworks, including HTML, CSS, JavaScript, and
          React. I have also completed several personal projects that have
          allowed me to apply and enhance my skills in web development.
        </p>

        <h4
          className="openSans my-2 h5 text-warning lh-lg"
          style={{ color: "cyan" }}
        >
          Skills:
        </h4>

        <div className="d-flex flex-wrap my-2">
          {mySkills.map((skill) => {
            return (
              <div className="p-2 m-2 fw-bold text-white bg-secondary rounded">
                {skill}
              </div>
            );
          })}
        </div>

        <p className="my-2">
          My dedication to learning and my passion for creating exceptional user
          experiences drive me to stay updated with the latest trends and
          advancements in the field of web development. I am continuously
          expanding my knowledge through online resources, tutorials, and
          personal projects.
        </p>

        <p className="my-2">
          I am confident in my ability to tackle challenging problems, work
          collaboratively in a team, and deliver high-quality results. I am
          currently seeking opportunities to improve my professional career as a
          web developer and contribute to exciting projects that push the
          boundaries of web development.
        </p>

        <p className="my-2">
          Please take a moment to explore my portfolio and projects. If you
          believe that my skills and enthusiasm align with your organization's
          goals, I would love to hear from you. Let's connect and create
          something amazing together!
        </p>
      </div>
    </div>
  );
}
