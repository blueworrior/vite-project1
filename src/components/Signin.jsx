import React,{useState} from 'react'
import { Link } from "react-router-dom";
import './Signin.css'

const title = () => {
  document.title = "TextUtels - login"
}

const Signin = (props) => {
  return (
    <>
    {title()}


    <div className="bc">
        <div style={props.mode} className="signin">
            <h2 style={props.mode}>Welcome back!</h2>
            <h3 id='d1'>EMAIL ADDRESS</h3>
            <input style={props.mode2} type="email" />
            <h3 id='d2'>PASSWORD</h3>
            <input style={props.mode2} type="password" />
            <button>
              <Link id='il' to={"/vite-project1"} style={props.mode2} onClick={props.handlecomp}>Login</Link>
            </button>
        </div>
    </div>
    </>
  )
}

export default Signin
