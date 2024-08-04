import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Css/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const adjustNavLinkBar = () => {
    const navLink = document.getElementsByClassName("active")[0];
    if (!navLink) return;

    const navStyle = getComputedStyle(navLink);
    const boundingClient = navLink.getBoundingClientRect();
    const bar = document.getElementById("nav-link-bar");

    bar.style.width = navStyle.width;
    bar.style.top = boundingClient.top + parseInt(navStyle.height) + "px";
    bar.style.left = boundingClient.left + "px";
  };

  // style active nav link
  useEffect(() => {
    const path = location.pathname;
    const activeNavlink = document.getElementsByClassName("active")[0];
    if (activeNavlink) activeNavlink.classList.remove("active");

    const navLink = document.getElementById(path.split("/")[1]);
    if (navLink) {
      document
        .getElementById("navbarSupportedContent")
        .classList.remove("show");
      navLink.classList.add("active");
      document.title = "Hemant's Portfolio | " + navLink.id;
      adjustNavLinkBar();
    } else navigate("/home");

    window.onresize = adjustNavLinkBar;
  }, [location.pathname, navigate]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark w-100 p-2 position-sticky"
      style={{
        backgroundColor: "rgba(0,0,0,0.90)",
        top: 0,
        zIndex: 2,
      }}
    >
      <div className="container-fluid">
        {/* hamburger menu  */}
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i
              className="fas fa-bars"
              style={{ color: "#fff", fontSize: "28px" }}
            />
          </span>
        </button>

        {/* logo */}
        <div
          className="align-items-center justify-content-center d-flex flex-lg-column flex-wrap fs-5 fw-bold lh-sm mx-auto mx-lg-0 navbar-brand p-2 px-sm-4 rounded user-select-none"
          style={{ backgroundColor: "#132c63" }}
        >
          <span>Hemant's</span>
          <span className="ms-lg-0 ms-2">PortFolio</span>
        </div>

        {/* nav items  */}
        <div
          className="collapse navbar-collapse align-items-center justify-content-center px-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link mx-lg-3" id="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link mx-lg-3" id="about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/portfolio"}
                className="nav-link mx-lg-3"
                id="portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link mx-lg-3" id="contact">
                Contact Me
              </Link>
            </li>
          </ul>
          <div
            id="nav-link-bar"
            className="d-lg-block d-none"
            style={{ width: "0 px", left: 0, top: 0 }}
          ></div>
        </div>
      </div>
    </nav>
  );
}
