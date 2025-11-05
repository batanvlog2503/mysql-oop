import React from "react"
import "./WriteBlog.css"
import Navbar from "../Navbar"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
// import NavbarLogin from "./NavbarLogin"
import { useState, useEffect } from "react"
const WriteBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    excerpt: "",
    slug: "",
    status: "",
    introduction: "",
    contentDetail: "",
    endContent: "",
    img: "",
    link: "",
  })
  const {
    title,
    content,
    excerpt,
    slug,
    status,
    introduction,
    contentDetail,
    endContent,
    img,
    link,
  } = blog
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBlog((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const saveBlog = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem("jwtToken")
      await axios.post("http://localhost:8081/post/create", blog, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      alert("✅ Post Created Successfully")
    } catch (error) {
      alert("❌ Post Failed")
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid write-blog-detail">
        <div className="inner-wrap-write">
          <div className="form-write-blog">
            <div
              className="title-write-blog text-center"
              style={{ padding: "30px" }}
            >
              <h2
                style={{ fontSize: "50px", color: "Black", fontWeight: "700" }}
              >
                Write
              </h2>
            </div>

            <form
              action=""
              className="input-group"
              autoComplete="off"
              onSubmit={(e) => saveBlog(e)}
            >
              <div className="input-group mb-3 title-blog">
                <label
                  htmlFor="title"
                  className="input-group-text"
                >
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  id="title"
                  placeholder="title"
                  aria-label="title"
                  aria-describedby="basic-addon1"
                  value={title}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="input-group mb-3 content-blog">
                <label
                  htmlFor="content"
                  className="input-group-text"
                >
                  Content:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="content"
                  id="content"
                  placeholder="content"
                  aria-label="content"
                  aria-describedby="basic-addon1"
                  value={content}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoComplete="new-password"
                />
              </div>
              <div className="input-group mb-3 excerpt-blog">
                <label
                  htmlFor="excerpt"
                  className="input-group-text"
                >
                  Summary :
                </label>
                <textarea
                  className="form-control"
                  name="excerpt"
                  id="excerpt"
                  placeholder="Enter a short summary"
                  aria-label="excerpt"
                  value={excerpt}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={3} // hiển thị cao hơn input thường
                />
              </div>
              <div className="input-group mb-3 slug-blog">
                <label
                  htmlFor="slug"
                  className="input-group-text"
                >
                  Slug:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="slug"
                  id="slug"
                  placeholder="slug"
                  aria-label="slug"
                  aria-describedby="basic-addon1"
                  value={slug}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="input-group mb-3 status-blog">
                <label
                  htmlFor="status"
                  className="input-group-text"
                >
                  Status :
                </label>
                <select
                  className="form-select"
                  name="status"
                  id="status"
                  value={status}
                  onChange={(e) => handleInputChange(e)}
                  required
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              <div className="input-group mb-3 introduction-blog">
                <label
                  htmlFor="introduction" // giới thiệu đầu bài
                  className="input-group-text"
                >
                  Introduction:
                </label>
                <textarea
                  className="form-control"
                  name="introduction"
                  id="introduction"
                  placeholder="Write an Introduction ... "
                  aria-label="introduction"
                  value={introduction}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={5} // hiển thị cao hơn input thường
                />
              </div>
              <div className="input-group mb-3 content-detail-blog">
                <label
                  htmlFor="contentDetail"
                  className="input-group-text"
                >
                  Main Content:
                </label>
                <textarea
                  className="form-control"
                  name="contentDetail"
                  id="contentDetail"
                  placeholder="Write a content detail ..."
                  aria-label="contentDetail"
                  value={contentDetail}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={5} // hiển thị cao hơn input thường
                />
              </div>
              <div className="input-group mb-3 end-content-blog">
                <label
                  htmlFor="endContent"
                  className="input-group-text"
                >
                  In Short:
                </label>
                <textarea
                  className="form-control"
                  name="endContent"
                  id="endContent"
                  placeholder="Write a end content  ..."
                  aria-label="endContent"
                  value={endContent}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={5} // hiển thị cao hơn input thường
                />
              </div>

              <div className="input-group mb-3 img-blog">
                <label
                  htmlFor="img"
                  className="input-group-text"
                >
                  Link Img:
                </label>
                <textarea
                  className="form-control"
                  name="img"
                  id="img"
                  placeholder="Attach photo here ..."
                  aria-label="img"
                  value={img}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={1} // hiển thị cao hơn input thường
                />
              </div>

              <div className="input-group mb-3 link-blog">
                <label
                  htmlFor="link"
                  className="input-group-text"
                >
                  Source:
                </label>
                <textarea
                  className="form-control"
                  name="link"
                  id="link"
                  placeholder="Link Tham Khảo ..."
                  aria-label="link"
                  value={link}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={2} // hiển thị cao hơn input thường
                />
              </div>

              <div className="button-post">
                <button
                  type="submit"
                  className="btn btn-outline-success w-100"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WriteBlog
