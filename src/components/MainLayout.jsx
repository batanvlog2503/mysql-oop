// components/Layout/MainLayout.jsx
import React from "react"
import Navbar from "./Navbar"
import Footer from "./Home/Footer/Footer"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default MainLayout
