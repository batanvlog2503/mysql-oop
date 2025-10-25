import React from "react"
import "./PostDetail.css"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
const PostDetail = () => {
  const [active, setActive] = useState(false)
  const { id } = useParams()
  const [postDetails, setPostDetails] = useState({})
  const [posts, setPosts] = useState([])
  const handleClick = (index) => {
    setActive(index)
  }
  useEffect(() => {
    loadPosts()
    loadPostDetails()
  }, [])
  const loadPostDetails = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/postdetails/${id}`,
      {
        validateStatus: () => {
          return true
        },
      }
    )

    if (result.status === 200) {
      setPostDetails(result.data)
      console.log("PostDetail data load successfully")
    } else {
      alert("Post Details Failed")
    }
  }

  const loadPosts = async () => {
    const result = await axios.get(`http://localhost:8080/api/posts/${id}`, {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 200) {
      setPosts(result.data)
      console.log("Post data load Successfully")
    } else {
      alert("Post data failed")
    }
  }
  return (
    <div className="container-fluid post-detail-section">
      <div className="inner-wrap-post-detail-title"> 
        <div className="row row-1">
          <div className="post-detail-title col-lg-8 col-xl-8 col-sm-12 col-12">
            <span>
              Written by: {posts.authorUser?.displayName || "Unknown Author"} |
              Update on:{" "}
              {new Date(posts.publishedAt).toLocaleDateString("vi-VN")}
            </span>
            <h1>{posts.title}</h1>
          </div>
          <div className="post-detail-img col-lg-4 col-xl-4 col-sm-12 col-12">
            <img
              src={postDetails.postImg}
              alt={postDetails.postImg}
            />
          </div>
        </div>
      </div>
      <div className="inner-wrap-post-details">
        <div className="row row-2">
          <div className="post-detail-contents col-lg-8 col-xl-8 col-sm-12 col-12">
            <div className="post-detail-introduction">
              <h3>Introduction</h3>
              <p>{postDetails.postIntroduction}</p>
            </div>
            <div className="post-detail-content">
              <h3>Content</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {postDetails.postContent}
              </p>
            </div>
            <div className="post-detail-end-content">
              <h3>In Short</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {" "}
                {postDetails.postEndContent}
              </p>
            </div>
            <div className="post-detail-link">
              <h3>Source Tham Khảo: </h3>
              <ul className="row ">
                {postDetails.postLink &&
                  postDetails.postLink
                    .split(",") // tách chuỗi theo dấu phẩy
                    .map((link, index) => (
                      <li key={index} style={{color:"orange"}}>
                        <a
                          href={link.trim()} // loại bỏ khoảng trắng đầu/cuối
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{color:"Orange"}}
                        >
                          {link.trim()}
                        </a>
                      </li>
                    ))}
              </ul>
            </div>
          </div>

          <div className="post-detail-table-content col-lg-4 col-xl-4 col-sm-12 col-12">
            <div className="post-detail-table-content-social">
              <span
                onClick={() => handleClick(1)}
                className={active === 1 ? "active1" : ""}
              >
                <i class="fa-brands fa-gratipay"></i> 38.5k
              </span>
              <span
                onClick={() => handleClick(2)}
                className={active === 2 ? "active2" : ""}
              >
                <i class="fa-solid fa-eye"></i> 382
              </span>
              <span
                onClick={() => handleClick(3)}
                className={active === 3 ? "active3" : ""}
              >
                <i class="fa-brands fa-telegram"></i> 78
              </span>
            </div>
            <div className="post-detail-info">
              <div className="row">
                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Publication Date</h5>
                  <span>
                    {new Date(posts.publishedAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Category</h5>
                  <span>{posts.category?.name}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Status</h5>
                  <span>{posts.status}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Author Name</h5>
                  <span>
                    {posts.authorUser?.displayName || "Unknown Author"}
                  </span>
                </div>
              </div>
            </div>
            <div className="post-detail-table-of-contents">
              <div className="title">
                <h4>Table of Contents</h4>
              </div>
              <div className="post-detail-table-list">
                <ul className="d-flex flex-column">
                  <div className="row">
                    <li>Introduction</li>
                    <li>Content</li>
                    <li>In Short</li>
                    <li>Source</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
