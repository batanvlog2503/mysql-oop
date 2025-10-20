import React from "react"
import "../Social/Social.css"
const Social = () => {
  return (
    <div className="container social-section">
      <div className="row">
        <div className="social-component col-lg-4 col-xl-4-col-sm-12 col-12">
          <a href="https://codepen.io/" target="_blank"><i className="fa-brands fa-codepen social-icons"></i></a>
          <h3 className="social-title">Welcome to Codepen</h3>
          <p className="social-desc">Stay Current</p>
        </div>
        <div className="social-component col-lg-4 col-xl-4-col-sm-12 col-12">
          <a href="https://freecodscamp.org/" target="_blank"><i className="fa-brands fa-free-code-camp social-icons"></i></a>
          <h3 className="social-title">Welcome to FreeCodeCamp</h3>
          <p className="social-desc">Introduce Code</p>
        </div>
        <div className="social-component col-lg-4 col-xl-4-col-sm-12 col-12">
          <a href="https://nodejs.org/en" target="_blank"><i className="fa-brands fa-node-js social-icons"></i></a>
          <h3 className="social-title">Welcome to NodeJS</h3>
          <p className="social-desc">Learn About NodeJS</p>
        </div>
      </div>
    </div>
  )
}

export default Social
