import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "../components/Navbar.css"
import { UserContext } from "./UserContext"
import { useContext } from "react"
const Navbar = () => {
  const {user, setUser} = useContext(UserContext);

const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  }
  return (
    <div className="navbar navbar-expand-lg" style={{backgroundColor:"black", minHeight:"10vh" ,borderBottom: "1px solid grey"}}>
      <div className="container-fluid header">
        <div className="row w-100">
          <div className="inner-title nav-link col-xl-4 col-lg-4" >
            <Link to="/" style={{textDecoration:"none"}}>
              <i style={{color:"white"}}>TECH</i>
              <i style={{ color: "orange"}}>BLOG</i>
            </Link>
          </div>
          <div className="inner-page col-xl-4 col-lg-4">
            <ul className="list-page" style={{listStyle:"none"}}>
              <li><Link to={"/home"} className="link-to-home link">Home</Link></li>
              <li><Link to={"/view-blogs"} className="link-to-news link">News</Link></li>
              <button>Write <i className="fa-solid fa-pen"></i></button>
            </ul> 
          </div>
          <div className="inner-contact col-xl-4 col-lg-4 text-center d-flex justify-content-center align-items-center">
            <div>
              <h5 className="inner-display-name">Chào Bạn! {user?.displayName}</h5>
            </div>
            <button className="log-out" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
