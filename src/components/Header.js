import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ title, next, prev }) => {
  return (
    <div className="header">
      <ul>
        <li className="left">
          <Link className="btn" to="/">
            Home
          </Link>
        </li>
        <li className="right">
          <Link
            className={next > 11 ? "btn disabled" : "btn"}
            to={`/chapter${next > 11 ? 11 : next}`}
          >
            →
          </Link>
        </li>
        <li className="right">
          <Link
            className={prev < 1 ? "btn disabled" : "btn"}
            to={`/chapter${prev < 1 ? 1 : prev}`}
          >
            ←
          </Link>
        </li>
        <li className="title">{title}</li>
      </ul>
    </div>
  );
};

export default Header;
