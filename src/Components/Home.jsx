import React from "react";
import { Link } from "react-router-dom";
import "../Css/Animations.css";
import { config } from "../config.js";

export default function Home() {
  const {resumeLink, gitHubUrl, workExperience, academics}=config
  return (
    <div className="container-fluid">
      {/* welcome  */}
      <div
        className="row justify-content-center p-3"
        style={{ backgroundColor: "#0d022c" }}
      >
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center order-1 text-center">
          <p className="h1 openSans text-warning">Hi! I am Hemant Patidar</p>
          <p
            className="h2 openSans mt-2 animated typing"
            style={{
              color: "aquamarine",
              backgroundColor: "#0d022c",
              animationDuration: "3s",
            }}
          >
            Welcome to my portfolio website.
          </p>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Link
              className="btn btn-light p-2 mx-2 fw-bold fs-6 mt-3 animated slideLeft"
              to={resumeLink}
              download={true}
            >
              <i className="fa-sharp fa-solid fa-arrow-down me-1" />
              Download Resume
            </Link>
            <Link
              className="btn btn-dark p-2 mx-2 fw-bold fs-6 mt-3 animated slideRight"
              to={gitHubUrl}
              target="_blank"
            >
              <i className="fa-brands fa-github me-1"></i>
              Visit Github
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-sm-10 mb-2 order-md-1 order-0">
          <img
            src={require("../Images/cover.png")}
            alt="cover.png"
            className="img-fluid animated zoomOut"
            draggable={false}
          />
        </div>
      </div>

      {/* work experience */}
      <div className="p-2" style={{ backgroundColor: "#033b3d" }}>
        <p
          className="fw-bold h2 openSans p-2 rounded text-bg-success user-select-none"
          style={{ width: "fit-content" }}
        >
          <i className="fa-solid fa-laptop-code me-2" />
          Work Experience
        </p>

        <div className="row justify-content-around mt-3 p-lg-4 p-2">
          {workExperience.map((item, index) => {
            return (
              <div
                className={
                  "d-flex flex-column fs-6 text-center p-3 rounded col-xl-4 col-md-5 col-sm-10 my-2 animated fadeOut"
                }
                style={{
                  lineHeight: "30px",
                  backgroundColor: "#3db78e",
                }}
                key={"work" + index}
              >
                <span className="openSans fs-5 fw-bold text-black">
                  {item.name}
                </span>
                <span className="fw-medium text-muted">
                  <i className="fa-solid fa-calendar-days me-1" />
                  {item.duration}
                </span>
                <ul className="ms-3 mt-1" style={{ color: "#0f204f" }}>
                  {item.points.map((point, pointIndex) => {
                    return (
                      <li
                        className="text-start fw-bold lh-sm my-1"
                        key={"work" + index + "point" + pointIndex}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* academic journey  */}
      <div className="p-2">
        <p
          className="bg-black fw-bold h2 openSans p-2 rounded text-info user-select-none mb-5"
          style={{ width: "fit-content" }}
        >
          <i className="fa-solid fa-graduation-cap me-2" />
          Academic Journey
        </p>
        {academics.map((item, index) => {
          return (
            <div
              key={"academic" + index}
              className="d-flex flex-column align-items-center justify-content-around animated growVertical"
              style={{ backgroundColor: "#121e2d", animationDuration: "1.5s" }}
            >
              <div
                className="rounded-circle bg-dark-subtle border border-4 border-primary col-xxl-2 col-xl-3 col-md-4 col-sm-5 col-11 d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1/1" }}
              >
                <div
                  className="d-flex flex-column fs-6 text-center p-2"
                  style={{ lineHeight: "30px" }}
                >
                  <span className="fw-bold text-dark">{item.name}</span>
                  <span className="openSans fw-medium text-muted">
                    <i className="fa-solid fa-calendar-days me-1" />
                    {item.duration}
                  </span>
                  <span className="fw-bold text-primary-emphasis">
                    {item.instituteName}
                  </span>
                  <span className="openSans fw-medium text-success">
                    <i className="fa-solid fa-location-dot me-1" />
                    {item.location}
                  </span>
                  <span className="openSans fw-medium text-info-emphasis">
                    {item.result}
                  </span>
                </div>
              </div>
              {index !== academics.length - 1 ? (
                <div
                  className="bg-primary"
                  style={{
                    height: "100px",
                    width: "5px",
                  }}
                ></div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

