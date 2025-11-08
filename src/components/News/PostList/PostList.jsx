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
import { useNavigate } from "react-router-dom"
import Search from "../Search/Search"
import Tag from "../../Home/Tag/Tag"
import Img from "../../Home/img/Img"
const PostList = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

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
    const result = await axios.get("http://localhost:8081/posts", {
      validateStatus: () => true,
    })

    if (result.status === 200) {
      console.log(result.data)
      setPosts(result.data)
      setFilteredPosts(result.data) // Khởi tạo filteredPosts
      console.log("Post Load Successfully")
    } else {
      alert("Result failed")
    }
  }

  // Hàm xử lý khi click vào tag
  const handleTagSelect = async (tagSlug) => {
    if (!tagSlug) {
      // Nếu không có tag (reset), hiển thị tất cả posts
      setFilteredPosts(posts) // hiện all
      return
    }

    // Gọi API lọc theo slug
    const result = await axios.get(
      `http://localhost:8081/tag/search?slug=${tagSlug}`,
      {
        validateStatus: () => true,
      }
    )

    if (result.status === 200) {
      setFilteredPosts(result.data)
      console.log(`Filtered by tag: ${tagSlug}`)
    } else {
      console.log("Failed to filter posts")
    }
  }

  const handleSearch = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === "") {
      // Nếu search rỗng, hiển thị tất cả posts
      setFilteredPosts(posts)
      return
    }

    // Gọi API search theo title
    const result = await axios.get(
      `http://localhost:8081/posts/search?title=${searchTerm}`,
      {
        validateStatus: () => true,
      }
    )

    if (result.status === 200) {
      setFilteredPosts(result.data)
      console.log(`Search results for: ${searchTerm}`)
    } else {
      console.log("Failed to search posts")
      setFilteredPosts([]) // Không tìm thấy kết quả
    }
  }
  return (
    <div className="container post-list">
      <Search
        search={search} // tìm  theo tag
        setSearch={setSearch} // thìm theo tag
        onSearch={handleSearch} // tìm theo search
      />
      <Tag onTagSelect={handleTagSelect} />
      <div className="post-grid">
        {filteredPosts.length > 0 ? (
          // .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
          filteredPosts.map((post, index) => (
            <div
              className="post-card"
              key={index}
            >
              <Img id={post.id}>
                {/* <img
                  src={postcard[index % postcard.length]}
                  alt={`postcard${index + 1}`}
                /> */}
              </Img>
              <div className="post-card-content">
                <h3>{post.title}</h3>
                <p>
                  {post.authorName} |{" "}
                  {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                </p>
                <span>{post.excerpt}</span>
                <button
                  className="post-read-more"
                  onClick={() => navigate(`/view-blogs/${post.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>Không tìm thấy bài viết nào với từ khóa "{search}"</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostList
