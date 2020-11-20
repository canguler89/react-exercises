import { Link } from "react-router-dom";
import React from "react";

export default function Menu(props) {
  return (
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/section">Section</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  );
}
