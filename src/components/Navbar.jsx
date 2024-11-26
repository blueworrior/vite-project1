import React, { useState } from "react";
import "./Navbar.css";
import PropTypes, { prohreftype } from "prop-types";
import Signin from "./signin";
import States from "./States";
// import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <>
      <style>
        <body style={props.mode}></body>
      </style>
      <div style={props.mode} className="navbar">
        <ul id="nav">
          <li id="wb">{props.title}</li>
          <li id="th">
            <div
              style={props.mode}
              onClick={props.handleMode}
              className="dlModebck"
            >
              <div className="dlMode" style={props.modecircle}></div>
              <div className="imgdiv">
                <img src={props.sun} alt="" id="sun" />
                <img src={props.moon} alt="" id="moon" />
              </div>
            </div>
          </li>
          <li>
            <a style={props.mode} id="li" href={""}>Home</a>
          </li>
          <li>
          <a style={props.mode} id="li" href={""}>Trending</a>
          </li>
          <li>
          <a style={props.mode} id="li" href={""}>Category</a>
          </li>
          <li>
            <a style={props.mode} id="li" href={""}>About</a>
          </li>

          <li id="thmli">
            <select style={props.mode} onClick={props.handleTheme} value={props.theme} onChange={e=>props.setTheme(e.target.value)} name="" id="thm">
              <option>OG</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </li>
          <li>
            <a style={props.mode2} href={""} id="si">Sign in</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};
