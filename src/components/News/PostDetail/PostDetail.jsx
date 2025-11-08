import React from "react"
import "./PostDetail.css"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Comment from "../Comment/Comment"
const PostDetail = () => {
  const [active, setActive] = useState(false)
  const { id } = useParams()
  const [postDetails, setPostDetails] = useState({})
  const [posts, setPosts] = useState([])
  const handleClick = (index) => {
    setActive(index)
  }

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({
    content: "",
  })

  const { content } = newComment
  console.log("Current ID from params:", id) // Debug log

  useEffect(() => {
    console.log("ID value:", id, "Type:", typeof id) // Kiểm tra giá trị

    if (id && id !== "undefined") {
      loadPosts()
      loadPostDetails()
      // loadComments()
    } else {
      console.error("Invalid or missing post ID")
    }
  }, [id])
  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value })
    // ví name = "firstName" = > firstName:"Jhon"
  }
  const loadPostDetails = async () => {
    const token = localStorage.getItem("jwtToken")
    const result = await axios.get(`http://localhost:8081/post/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      validateStatus: () => {
        return true
      },
    })

    console.log(" Response Post Detail data:", result.data)
    // console.log(" Post title:", result.data.title)
    // console.log(" Author:", result.data.authorUser?.displayName)

    if (result.status === 200) {
      setPostDetails(result.data)
      // Set comments từ response

      console.log("PostDetail data load successfully")
      console.log(result.data)
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
      console.log(result.data)
      setComments(result.data.commentDTOs)
    } else {
      alert("Post data failed")
    }
  }
  // const loadComments = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8081/post/${id}/comments`)
  //     if (res.status === 200) {
  //       setComments(res.data)
  //     }
  //   } catch (error) {
  //     console.error("Error loading comments:", error)
  //   }
  // }
  const saveComment = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("jwtToken")
      await axios.post(`http://localhost:8081/post/${id}/comment`, newComment, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      alert("Comment added successfully!")
      setNewComment({ content: "" })
      //loadComments() // load lại danh sách
    } catch (error) {
      console.error("Error adding comment:", error)
      alert("Failed to add comment")
    }
  }
  return (
    <div className="container-fluid post-detail-section">
      <div className="inner-wrap-post-detail-title">
        <div className="row row-1">
          <div className="post-detail-title col-lg-8 col-xl-8 col-sm-12 col-12">
            <span>
              Written by: {postDetails.authorName || "Unknown Author"} | Update
              on:{" "}
              {new Date(postDetails.publishedAt).toLocaleDateString("vi-VN")}
            </span>

            <h1>{postDetails.title}</h1>
            <h2>{postDetails.content}</h2>
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
                    {new Date(postDetails.publishedAt).toLocaleDateString(
                      "vi-VN"
                    )}
                  </span>
                </div>
                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Category</h5>
                  <span>{postDetails.categoryName}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Slug</h5>
                  <span>{postDetails.slug}</span>
                </div>

                <div className="info-component col-xl-6 col-lg-6 col-md-12 col-12">
                  <h5>Author Name</h5>
                  <span>{postDetails.authorName || "Unknown Author"}</span>
                </div>
                <div className="info-component">
                  <b style={{ color: "Orange" }}>Tags:&nbsp;</b>
                  <span style={{ color: "rgb(45, 44, 44)" }}>
                    {" "}
                    {postDetails.tagDTOs &&
                      postDetails.tagDTOs.map((tag) => tag.name).join(", ")}
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
      <div className="inner-wrap-comment">
        <div className="post-detail-comment row">
          <div className="post-detail-comment-title col-lg-8 col-xl-8 col-sm-12 col-12">
            <h3>Comment ({comments.length})</h3>
          </div>
          <div className="post-detail-comment-form col-lg-8 col-xl-8 col-sm-12 col-12">
            <form
              action=""
              className="input-group"
              autoComplete="off"
              onSubmit={(e) => saveComment(e)}
            >
              <div className="input-group mb-3 comment-post">
                <textarea
                  className="form-control"
                  name="content"
                  id="content"
                  placeholder="Comment..."
                  aria-label="content"
                  aria-describedby="basic-addon1"
                  value={content}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoComplete="new-password"
                  rows={4}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-success button-submit-comment"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="post-detail-display-comment col-lg-8 col-xl-8 col-sm-12 col-12">
          <Comment
            comment={comments}
            postId={postDetails.id}
          ></Comment>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
