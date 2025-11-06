import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "../components/Navbar.css"
import { UserContext } from "./UserContext"
import { useContext } from "react"
const Navbar = () => {
  const { user, setUser } = useContext(UserContext)

  const navigate = useNavigate()
  const handleLogout = () => {
    setUser(null)
    navigate("/")
  }
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
          <div className="inner-title nav-link col-xl-3 col-lg-3">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
            >
              <i style={{ color: "white" }}>TECH</i>
              <i style={{ color: "orange" }}>BLOG</i>
            </Link>
          </div>
          <div className="inner-page col-xl-6 col-lg-6">
            <ul
              className="list-page"
              style={{ listStyle: "none" }}
            >
              <li>
                <Link
                  to={"/home"}
                  className="link-to-home link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/view-blogs"}
                  className="link-to-news link"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  className="link-to-my-blog my-blog link"
                  to={"/my-blog"}
                >
                  {" "}
                  My Blog
                </Link> 
              </li>
              <li>
                <Link
                  className="link-to-write-blog write-blog link"
                  to={"/write-blog"}
                >
                  {" "}
                  Write <i className="fa-solid fa-pen"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="inner-contact col-xl-3 col-lg-3 text-center d-flex justify-content-center align-items-center">
            <div>
              <h5 className="inner-display-name">Chào Bạn! {user.username}</h5>
            </div>
            <button
              className="log-out"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
