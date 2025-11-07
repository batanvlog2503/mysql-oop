import React, { useEffect } from "react"
import postcard1 from "../PostList/ImgPostList/postcard1.jpg"
import postcard2 from "../PostList/ImgPostList/postcard2.jpg"
import postcard3 from "../PostList/ImgPostList/postcard3.jpg"
import postcard4 from "../PostList/ImgPostList/postcard4.jpg"
import postcard5 from "../PostList/ImgPostList/postcard5.jpg"
import postcard6 from "../PostList/ImgPostList/postcard6.jpg"
import postcard7 from "../PostList/ImgPostList/postcard7.jpg"
import postcard8 from "../PostList/ImgPostList/postcard8.jpg"

import "./MyBlog.css"
import Navbar from "../../Navbar"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

const MyBlog = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const postcard = [
    postcard1,
    postcard2,
    postcard3,
    postcard4,
    postcard5,
    postcard6,
    postcard7,
    postcard8,
  ]
  useEffect(() => {
    loadPosts()
  }, [])
  const loadPosts = async () => {
    const token = localStorage.getItem("jwtToken")
    //const username = localStorage.getItem("username");
    console.log(token)
    const result = await axios.get("http://localhost:8081/post/myblog", {
      validateStatus: () => {
        return true
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(result.data)
    console.log(localStorage.getItem("jwtToken"))

    if (result.status === 200) {
      setPosts(result.data)
      console.log(posts)
      console.log("Post Load Successfully")
    } else {
      alert("Result failed")
    }
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa bài viết này không?"
    )
    if (!confirmDelete) return // nếu người dùng chọn Cancel thì dừng lại

    try {
      const token = localStorage.getItem("jwtToken")
      await axios.delete(`http://localhost:8081/post/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      alert("Xóa bài viết thành công!") 
      loadPosts() // load lại danh sách
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error)
      alert("Không thể xóa bài viết, vui lòng thử lại!") 
    }
  }
  return (
    <div className="container-fluid my-blog">
      <Navbar></Navbar>
      <div
        className="container display-my-blog"
        style={{ marginTop: "40px" }}
      >
        <div className="inner-wrap-my-blog">
          <h1>My Blog</h1>
          <div className="row">
            {Array.isArray(posts) &&
              posts.map((post, index) => (
                <div
                  className="inner-wrap"
                  key={index}
                >
                  <div className="row">
                    <div className="post-img col-xl-4 col-lg-4 col-sm-12 col-12">
                      <img
                        src={postcard[index]}
                        alt={`postcard${index + 1}`}
                      />
                    </div>

                    <div className="post-title col-xl-6 col-lg-6 col-sm-12 col-12">
                      <h3>{post.title}</h3>
                      <p>
                        {post.authorName} |
                        {new Date(post.publishedAt).toLocaleDateString("vi-VN")}{" "}
                        | {post.viewCount} Lượt xem
                      </p>
                      <span>{post.excerpt}</span>
                      <div className="post-social d-flex justify-content-between">
                        <button
                          className="post-read-more"
                          onClick={() => navigate(`/view-blogs/${post.id}`)}
                        >
                          {/* <Link to={`/view-blogs/${post.id}`}></Link>Read more */}
                          Read More
                        </button>
                      </div>
                    </div>
                    <div className="post-update-and-delete col-xl-2 col-lg-2 col-sm-12 col-12">
                      <Link
                        to={`/update-blog/${post.id}`}
                        className="btn btn-primary"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBlog
