import React, { useState, useEffect } from "react"
import axios from "axios"

import postcard1 from "./ImgPostList/postcard1.jpg"
import postcard2 from "./ImgPostList/postcard2.jpg"
import postcard3 from "./ImgPostList/postcard3.jpg"
import postcard4 from "./ImgPostList/postcard4.jpg"
import postcard5 from "./ImgPostList/postcard5.jpg"
import postcard6 from "./ImgPostList/postcard6.jpg"
import postcard7 from "./ImgPostList/postcard7.jpg"
import postcard8 from "./ImgPostList/postcard8.jpg"
import "./PostList.css"
import {Link} from "react-router-dom"
const PostList = () => {
  const [active, setActive] = useState(null)

  const handleClick = (index) => {
    setActive(index)
  }
  const [posts, setPosts] = useState([])
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
    const result = await axios.get("http://localhost:8080/api/posts", {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 200) {
      setPosts(result.data)
      console.log(posts)
    } else {
      alert("Result failed")
    }
  }

  return (
    <div className="container post-list">
      <div className="inner-wrap-list">
        {posts.map((post, index) => (
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

              <div className="post-title col-xl-8 col-lg-8 col-sm-12 col-12">
                <h3>{post.title}</h3>
                <p>
                  {post.authorUser.displayName} |
                  {new Date(post.publishedAt).toLocaleDateString("vi-VN")} |{" "}
                  {post.viewCount} lượt xem
                </p>
                <span>{post.excerpt}</span>
                <div className="post-social d-flex justify-content-between">
                  <div>
                    <span
                    onClick={() => handleClick(1)}
                    className={active === 1 ? "active1" : ""}
                  >
                    <i className="fa-brands fa-gratipay"></i> 13.5K
                  </span>
                  <span
                    onClick={() => handleClick(2)}
                    className={active === 2 ? "active2" : ""}
                  >
                    <i className="fa-brands fa-telegram"></i> 38
                  </span>
                  </div>

                  <button className="post-read-more"><Link to = {`/view-blogs/${post.id}`}></Link>Read more</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostList
