import React, { useEffect } from "react"
import { FaTrashAlt, FaEdit } from "react-icons/fa"
import "./MyBlog.css"
import Navbar from "../../Navbar"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Img from "../../Home/img/Img"
import api from "../../../services/apiService"

const MyBlog = () => {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    loadPosts()
  }, [])
  const loadPosts = async () => {
    const token = localStorage.getItem("jwtToken")
    //const username = localStorage.getItem("username");
    console.log(token)
    // const result = await axios.get("https://backend-blog-production-c415.up.railway.app/post/myblog", {
    //   validateStatus: () => {
    //     return true
    //   },
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    const result = await api.getMyBlog()
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
      // await axios.delete(`https://backend-blog-production-c415.up.railway.app/post/delete/${id}`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // })
      await api.deletePost(id)
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
          <h1 style={{ fontSize: "50px" }}>My Blog</h1>
          <div className="row">
            {Array.isArray(posts) &&
              posts.map((post, index) => (
                <div
                  className="inner-wrap"
                  key={index}
                >
                  <div className="row">
                    <div className="post-img col-xl-4 col-lg-4 col-sm-12 col-12">
                      <Img id={post.id}></Img>
                    </div>

                    <div className="post-title col-xl-6 col-lg-6 col-sm-12 col-12">
                      <h3 style={{ padding: "15px" }}>{post.title}</h3>
                      <p style={{ padding: "15px" }}>
                        Display Name: {post.authorName} | Published At:{" "}
                        {new Date(post.publishedAt).toLocaleDateString("vi-VN")}{" "}
                        | {post.viewCount} View Count
                      </p>
                      <span style={{ padding: "15px" }}>{post.excerpt}</span>
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
                        <FaEdit />
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(post.id)}
                      >
                        <FaTrashAlt />
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
