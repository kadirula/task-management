import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <h4 className="navbar__title">Platform Launch</h4>
      <div className="navbar__action">
        <button
          className="button button--main"
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default Navbar;
