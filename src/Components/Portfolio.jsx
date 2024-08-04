import React from "react";
import { config } from "../config.js";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const portfolio = config.portfolio;
  return (
    <div
      className="flex-fill p-2"
      style={{
        backgroundImage: `url(${require("../Images/portfolio-bg.jpg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {portfolio.map((item) => {
        return (
          <div
            className="col-xl-10 col-11 d-flex flex-column mx-auto my-4 p-3 rounded"
            style={{ backgroundColor: "rgb(205 195 195 / 12%)" }}
            key={item.projectName}
          >
            {/* project logo and title */}
            <div className="d-flex align-items-center">
              <img
                src={require("../Images/" + item.logo)}
                alt="logo"
                height="50px"
                className="me-1"
              />
              <span className="h2 openSans text-warning">
                {item.projectName}
              </span>
            </div>

            {/* project one liner quote */}
            <span className="fs-6 text-white-50">{item.projectQuote}</span>

            {/* deployment status */}
            {item.deployment ? (
              <span className="fs-6 fw-bold text-white">
                <i className="fa-solid fa-circle-check me-2 text-success" />
                Deployed
              </span>
            ) : (
              <></>
            )}

            {/* links  */}
            <div className="d-flex">
              {item.deployment ? (
                <Link
                  className="btn btn-primary p-2 me-3 fw-bold fs-6 mt-3"
                  to={item.deployment}
                  target="_blank"
                >
                  <i className="fa-solid fa-globe me-1" />
                  Visit
                </Link>
              ) : (
                <></>
              )}
              <Link
                className="btn btn-dark p-2 fw-bold fs-6 mt-3"
                to={item.gitHub}
                target="_blank"
              >
                <i className="fa-brands fa-github me-1"></i>
                Github
              </Link>
            </div>

            <div className="d-flex justify-content-between align-items-baseline flex-wrap-reverse">
              {/* description in points */}
              <div
                className="col-lg-6 col-md-7 col-12 mt-3 p-1 rounded animated growVertical"
                style={{
                  backgroundColor: "rgb(58 58 58)",
                  animationDuration: "2s",
                }}
              >
                <ul className="ms-4 d-flex flex-column">
                  {item.points.map((point, index) => {
                    return (
                      <li
                        className="fs-6 fw-bold my-1 lh-sm"
                        style={{ color: "#0aa19a" }}
                        key={item.name + "point" + index}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* skills/tech used */}
              <div className="col-lg-5 col-md-4 col-12 d-flex flex-column">
                <span className="h2 fs-5 mx-md-auto fw-bold text-white-50 mt-md-0 mt-3 mb-1">
                  Tech Used
                </span>
                <div className="d-flex flex-wrap">
                  {item.skillsUsed.map((skill, index) => {
                    return (
                      <span
                        className="p-2 openSans fs-6 rounded text-white m-1 animated fadeOut"
                        style={{
                          backgroundColor: "#10103f",
                          animationDelay: index * 0.2 + "s",
                          // animationDuration: "0.5s",
                        }}
                        key={item.name + "skill" + index}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
