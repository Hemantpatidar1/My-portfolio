import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Index() {
  const path = useLocation().pathname;

  useEffect(() => {
    //scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // start animation only when element is scrolled into view
    const manageAnimations = () => {
      const animatedElement = [...document.getElementsByClassName("animated")];

      animatedElement.forEach((element) => {
        const elementTopPositon =
          element.getBoundingClientRect().top / window.innerHeight;

        // in case element position is not sufficient to come at top part of vieport
        const elementBottomPosition =
          elementTopPositon +
          parseInt(getComputedStyle(element).height) / window.innerHeight;

        if (
          elementTopPositon >= 0 &&
          elementBottomPosition > 0 &&
          (elementTopPositon <= 0.75 || elementBottomPosition <= 1)
        )
          element.classList.remove("animated");
      });
    };
    window.onscroll = manageAnimations;
    manageAnimations();
  }, [path]);
  return (
    <>
      <Navbar />
      <div className="d-flex flex-fill">
        <Outlet />
      </div>
    </>
  );
}
