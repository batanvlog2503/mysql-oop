import React from "react"
import { Link } from "react-router-dom"
// import "./NavbarLogin.css"
const NavbarLogin = () => {
  return (
    <div
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "black",
        minHeight: "10vh",
        borderBottom: "1px solid grey",
      }}
    >
      <div className="container-fluid header">
        <div className="row w-100">
          <div className="inner-title nav-link col-xl-4 col-lg-4">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
            >
              <i style={{ color: "white" }}>TECH</i>
              <i style={{ color: "orange" }}>BLOG</i>
            </Link>
          </div>
          <div className="inner-page col-xl-4 col-lg-4">
            {/* <ul className="list-page" style={{listStyle:"none"}}>
              <li><Link to={"/home"} className="link-to-home link">Home</Link></li>
              <li><Link to={"/view-blogs"} className="link-to-news link">News</Link></li>
              <button>Write <i className="fa-solid fa-pen"></i></button>
            </ul>  */}
          </div>
          <div className="inner-contact inner-login col-xl-4 col-lg-4 text-center d-flex justify-content-center align-items-center">
            <button className="btn btn-sign-in">Sign In</button>
            <button className="btn btn-sign-up">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarLogin
