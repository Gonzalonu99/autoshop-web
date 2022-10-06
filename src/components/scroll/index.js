import React, { useState } from "react";
import { ScrollUpButton } from "./Scroll.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <ScrollUpButton>
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      />
    </ScrollUpButton>
  );
};

export default ScrollUp;
