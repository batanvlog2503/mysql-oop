import React, { useEffect } from "react"

import "./MyBlog.css"
import Navbar from "../../Navbar"
import axios from "axios"
import { useState } from "react"
const MyBlog = () => {
  const [posts, setPosts] = useState([])

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
    console.log(localStorage.getItem("jwtToken"))

    if (result.status === 200) {
      setPosts(result.data)
      console.log(posts)
      console.log("Post Load Successfully")
    } else {
      alert("Result failed")
    }
  }
  return (
    <div className="container-fluid my-blog">
      <Navbar></Navbar>
      <div className="container display-my-blog">
        <div className="inner-wrap-my-blog">
          <h1>My Blog</h1>
          <div
            className="row"
            style={{ border: "1px solid grey" }}
          >
            {posts.map((post, index) => (
              <div key={index}>{post.authorName}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyBlog
