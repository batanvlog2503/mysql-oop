import React, { useEffect, useState } from "react"
import PostDetail from "./PostDetail"
import { useParams, Outlet } from "react-router-dom"
import Navbar from "../../Navbar"
import Footer from "../../Home/Footer/Footer"
import axios from "axios"
import SimilarBlog from "../SimilarBlog/SimilarBlog"
const PostDetailLayout = () => {
  
  return (
    <div>
      
      <div className="container-fluid post-detail-layout-section">
        <Navbar></Navbar>
        <PostDetail></PostDetail>
        {/* <SimilarBlog></SimilarBlog> */}
        <Footer></Footer>
      </div>
    </div>
  )
}

export default PostDetailLayout
