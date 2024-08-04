import React from "react";
import { Link } from "react-router-dom";
import { config } from "../config.js";

export default function Contact() {
  const { email, phone, linkedinUrl, githubUrl, fbUrl, instaUrl } = config;

  const copyToClipboard = (e) => {
    const button = e.currentTarget;
    const icon = button.querySelector("i");
    const input = button.previousElementSibling;
    input.select();
    document.execCommand("copy");

    const currentClassList = "fa-solid fa-clipboard fs-5";
    button.classList.remove("btn-secondary");
    button.classList.add("btn-light");
    const newClassList = "fa-solid fa-circle-check fs-5 text-success";
    icon.classList.value = newClassList;

    setTimeout(() => {
      button.classList.remove("btn-light");
      button.classList.add("btn-secondary");
      icon.classList.value = currentClassList;
    }, 2500);

    // Remove the text selection
    window.getSelection().removeAllRanges();
  };
  const getCopyToClipboardButton = () => {
    return (
      <button
        className="btn btn-secondary rounded-0 rounded-end px-3"
        onClick={copyToClipboard}
      >
        <i className="fa-solid fa-clipboard fs-5" />
      </button>
    );
  };

  return (
    <div className="container-fluid row flex-fill align-items-center justify-content-center">
      <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-sm-10 col-sm p-sm-3 p-2 rounded border border-2 animated fadeOut">
        <img
          src={require("../Images/contact.jpg")}
          alt="cover.png"
          className="img-fluid rounded"
          draggable={false}
        />
        {/* email  */}
        <div className="d-flex my-2">
          <i className="fa-solid fa-envelope fs-5 rounded-start p-3 text-bg-danger" />
          <input
            type="text"
            className="form-control-lg text-center openSans fs-6 fw-bold rounded-0 border-0 w-100"
            value={email}
            readOnly
            style={{ outline: "none" }}
          />
          {getCopyToClipboardButton()}
        </div>

        {/* phone */}
        <div className="d-flex my-2">
          <i className="fa-solid fa-phone fs-5 rounded-start p-3 text-bg-warning" />
          <input
            type="text"
            className="form-control-lg text-center openSans fs-6 fw-bold rounded-0 border-0 w-100"
            value={phone}
            readOnly
            style={{ outline: "none" }}
          />
          {getCopyToClipboardButton()}
        </div>

        <span
          className="text-success text-decoration-underline d-block fs-6 fw-bold mt-4 mb-2"
          style={{ textUnderlineOffset: "4px" }}
        >
          Connect to me on Social Media :
        </span>

        <div className="d-flex flex-row">
          <Link
            className="fa-brands fa-linkedin-in fs-5 rounded-circle p-3 btn btn-primary me-1"
            to={linkedinUrl}
            target="_blank"
          />
          <Link
            className="fa-brands fa-github fs-5 rounded-circle p-3 btn btn-dark mx-1"
            to={githubUrl}
            target="_blank"
          />
          <Link
            className="fa-brands fa-square-facebook fs-5 rounded-circle p-3 btn btn-info text-white mx-1"
            to={fbUrl}
            target="_blank"
          />
          <Link
            className="fa-brands fa-instagram fs-5 rounded-circle p-3 btn text-white mx-1"
            to={instaUrl}
            target="_blank"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
