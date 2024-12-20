import React, { useState } from "react";
import "./Navbar.css";
import PropTypes, { prototype } from "prop-types";
import Signin from "./signin";
import States from "./States";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  const [menu, setmenu] = useState(350)

  const menuclick = (() => {
    if(menu === 350)
      setmenu(0)
    else
      setmenu(350)
  })

  return (
    <>
      <div style={props.mode} className="navbar">
          <ul id="nav">
            <li id="wb">{props.title}</li>
            <li id="th">
              <div
                style={props.mode}
                onClick={props.handleMode}
                className="dlModebck">
                <div className="dlMode" style={props.modecircle}></div>
                <div className="imgdiv">
                  <img src={props.sun} alt="" id="sun" />
                  <img src={props.moon} alt="" id="moon" />
                </div>
              </div>
            </li>
        <img onClick={menuclick} style={props.mode2} src="menubar.png" alt="" id="menuimg"/>

        <div style={{
          ...props.mode,
          bottom: menu,
          }} className="menubar">
            <li>
              <Link style={props.mode} id="li" to={"/"}>Home</Link>
            </li>
            <li>
            <Link style={props.mode} id="li">Trending</Link>
            </li>
            <li>
            <Link style={props.mode} id="li">Category</Link>
            </li>
            <li>
              <Link style={props.mode} id="li" to={"/about"}>About</Link>
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
              <Link style={props.mode2} to={"/login"} id="si">Sign in</Link>
            </li>
      </div>
          </ul>
        </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};
