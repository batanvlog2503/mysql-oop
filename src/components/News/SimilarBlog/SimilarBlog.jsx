import React, { use, useEffect, useState } from "react"
import "./SimilarBlog.css"
import axios from "axios"
import postcard5 from "./ImgSimilarBlog/postcard5.jpg"
import postcard6 from "./ImgSimilarBlog/postcard6.jpg"
import postcard7 from "./ImgSimilarBlog/postcard7.jpg"
import postcard8 from "./ImgSimilarBlog/postcard8.jpg"
const SimilarBlog = () => {
  const [similarPost, setSimilarPost] = useState([])
  const [active, setActive] = useState(null)

  const handleClick = (index) => {
    setActive(index)
  }
  const postcard = [postcard5, postcard6, postcard7]
  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const result = await axios.get("http://localhost:8081/posts", {
      
      validateStatus: () => {
        return true
      },
    })

    if (result.status === 200) {
      setSimilarPost(result.data)
      console.log("Load Similar post successfully")
    } else {
      //alert("Load Similar Post Failed") // nhớ cho vào nhé
      console.log("load Similar blog failed")
    }
  }
  return (
    <div className="container similar-blogs">
      <div className="inner-wrap-similar-blogs">
        <h1 className="title">Similar Blogs</h1>
        <div className="row">
          {similarPost.slice(0, 3).map((post, index) => (
            <div
              className="view-similar-blog col-lg-4 col-xl-4 col-sm-12 col-12"
              key={index}
            >
              <div className="similar-blog-img">
                <img
                  className="img"
                  src={postcard[index]}
                  alt={`postcard${index}`}
                />
              </div>
              <h4 className="similar-blog-title">{post.title}</h4>
              <p className="similar-blog-category">{post.categoryName}</p>
              <div className="similar-blog-social d-flex flex-row justify-content-between">
                <div className="heart-and-message">
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
                <button className="similar-blog-read-more">
                  Read more <i className="fa-brands fa-searchengin"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimilarBlog
