import React from "react"
import Navbar from "../Navbar"
import NewsIntroduction from "./NewsIntroduction"

import { Outlet } from "react-router-dom"
import PostCard from "./PostCard/PostCard"
import PostList from "./PostList/PostList"
import Tag from "../Home/Tag/Tag"
const ViewBlogs = () => {
  
  return (
    <div>
      <NewsIntroduction></NewsIntroduction>
      {/* <PostCard></PostCard> */}
      <div className="container-fluid view-blogs view-tags">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-sm-12 col-12">
            <PostList></PostList>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-12 col-12">
            <Tag></Tag>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default ViewBlogs
