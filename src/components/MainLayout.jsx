// components/Layout/MainLayout.jsx
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Home/Footer/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="container-fluid main-layout">
      <div className="sticky-top">
        
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
