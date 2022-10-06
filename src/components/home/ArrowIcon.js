import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const ArrowIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCircleArrowDown} className="arrowDown" />
    </div>
  );
};

export default ArrowIcon;
