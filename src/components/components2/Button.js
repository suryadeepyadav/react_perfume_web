import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="signup">
      <button className="btn">Call Us</button>
    </Link>
  );
}

export default Button;
