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
  console.log("Current ID from params:", id) // Debug log

  useEffect(() => {
    console.log("ID value:", id, "Type:", typeof id) // Kiểm tra giá trị

    if (id && id !== "undefined") {
      loadPosts()
      loadPostDetails()
    } else {
      console.error("Invalid or missing post ID")
    }
  }, [id])
  // useEffect(() => {
  //   loadPostDetails()
  //   loadPosts()
  // })
  // useEffect(() => {
  //   // CHỈ GỌI API NẾU id CÓ GIÁ TRỊ HỢP LỆ
  //   if (id) {
  //     loadPosts()
  //     loadPostDetails()
  //   } else {
  //     // (Optional) Ghi log để theo dõi nếu id không tồn tại
  //     console.log("Post ID is undefined, skipping API calls.")
  //   }
  // }, [id])
  const loadPostDetails = async () => {
    // const result = await axios.get(
    //   `http://localhost:8080/api/postdetails/${id}`,
    //   {
    //     validateStatus: () => {
    //       return true
    //     },
    //   }
    // )
    const token = localStorage.getItem("jwtToken")
    const result = await axios.get(`http://localhost:8081/post/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      validateStatus: () => {
        return true
      },
    })

    console.log("✅ Response status:", result.status)
    console.log("📦 Response data:", result.data)
    console.log("📝 Post title:", result.data.title)
    console.log("👤 Author:", result.data.authorUser?.displayName)

    if (result.status === 200) {
      setPostDetails(result.data)
      console.log("PostDetail data load successfully")
    } else {
      alert("Post Details Failed")
    }
  }

  const loadPosts = async () => {
    const result = await axios.get(`http://localhost:8081/post/${id}`, {
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
              Written by: {posts.authorName || "Unknown Author"} | Update on:{" "}
              {new Date(posts.publishedAt).toLocaleDateString("vi-VN")}
            </span>
            <h1>{posts.title}</h1>
          </div>
          <div className="post-detail-img col-lg-4 col-xl-4 col-sm-12 col-12">
            <img
              src={postDetails.img}
              alt={postDetails.img}
            />
          </div>
        </div>
      </div>
      <div className="inner-wrap-post-details">
        <div className="row row-2">
          <div className="post-detail-contents col-lg-8 col-xl-8 col-sm-12 col-12">
            <div className="post-detail-introduction">
              <h3>Introduction</h3>
              <p>{postDetails.introduction}</p>
            </div>
            <div className="post-detail-content">
              <h3>Content</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {postDetails.contentDetail}
              </p>
            </div>
            <div className="post-detail-end-content">
              <h3>In Short</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {" "}
                {postDetails.endContent}
              </p>
            </div>
            <div className="post-detail-link">
              <h3>Source Tham Khảo: </h3>
              <ul className="row ">
                {postDetails.link &&
                  postDetails.link
                    .split(",") // tách chuỗi theo dấu phẩy
                    .map((link, index) => (
                      <li
                        key={index}
                        style={{ color: "orange" }}
                      >
                        <a
                          href={link.trim()} // loại bỏ khoảng trắng đầu/cuối
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "Orange" }}
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
                <i className="fa-brands fa-gratipay"></i> 38.5k
              </span>
              <span
                onClick={() => handleClick(2)}
                className={active === 2 ? "active2" : ""}
              >
                <i className="fa-solid fa-eye"></i> 382
              </span>
              <span
                onClick={() => handleClick(3)}
                className={active === 3 ? "active3" : ""}
              >
                <i className="fa-brands fa-telegram"></i> 78
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
                  <span>{posts.categoryName}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Slug</h5>
                  <span>{posts.slug}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Author Name</h5>
                  <span>{posts.authorName || "Unknown Author"}</span>
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
