import React from "react"
import Navbar from "../Navbar"
import Introduction from "./Introduction/Introduction"
import Social from "./Social/Social"
import Review from "./Review/Review"
import ViewGuest from "./ViewGuest/ViewGuest"
import Footer from "./Footer/Footer"
import { Outlet } from "react-router-dom"
const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <Introduction />

      <Social></Social>
      <Review></Review>
      <ViewGuest></ViewGuest>

      <Footer />
    </div>
  )
}

export default Home
