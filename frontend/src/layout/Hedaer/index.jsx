import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">Logo</div>
          <div className="right">
            <div className="pages">
              <ul>
                <li>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/basket">
                    Basket
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/wishlist">
                    Wishlist
                  </Link>
                </li>

                <li>
                  <Link className="link" to="/addPages">
                    addPages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="icons">
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
              <FontAwesomeIcon className="icon" icon={faUserPlus} />
              <FontAwesomeIcon className="icon" icon={faCartShopping} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
