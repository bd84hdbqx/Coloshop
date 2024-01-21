import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="right">FREE SHIPPING ON ALL U.S ORDERS OVER $50</div>
          <div className="left">
            <div>
              USD{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div>
              English{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div>
              My account{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ color: "#ffffff" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
