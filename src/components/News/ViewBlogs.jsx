import React from "react"
import Navbar from "../Navbar"
import NewsIntroduction from "./NewsIntroduction"
import Review1 from "../Home/Review/Review1.jsx"
import { Outlet } from "react-router-dom"
import PostCard from "./PostCard/PostCard"
import PostList from "./PostList/PostList"
import Tag from "../Home/Tag/Tag"
import SimilarBlog from "./SimilarBlog/SimilarBlog"
import Footer from "../Home/Footer/Footer.jsx"
import api from "../../services/apiService"
const ViewBlogs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <NewsIntroduction></NewsIntroduction>
      {/* <PostCard></PostCard> */}
      <div
        className="container-fluid view-blogs view-tags"
        style={{ height: "70vh", marginBottom: "30px", padding: "50px" }}
      >
        <div
          className="row"
          style={{ height: "100%" }}
        >
          <div
            className="col-view col-xl-12 col-lg-12 col-sm-12 col-12"
            style={{ marginBottom: "30px" }}
          >
            <div className="row">
              {/* <div className="tags col-xl-12 col-lg-12 col-sm-12 col-12">
                <Tag></Tag>
              </div> */}
              <div className="list-blog col-xl-12 col-lg-12 col-sm-12 col-12">
                <PostList></PostList>
              </div>
            </div>
          </div>
          {/* <div className="similar-blogs col-lg-12 col-xl-12 col-sm-12 col-12">
            <SimilarBlog></SimilarBlog>
          </div> */}
          {/* <div className="review1 col-lg-12 col-xl-12 col-sm-12 col-12">
            <Review1></Review1>
          </div> */}
          <div className="footer col-lg-12 col-xl-12 col-sm-12 col-12">
            {" "}
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}
//pl
export default ViewBlogs
