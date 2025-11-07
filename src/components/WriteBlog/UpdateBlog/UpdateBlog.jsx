import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../Navbar"
import { useState, useEffect } from "react"

import axios from "axios"
const UpdateBlog = () => {
  const [tagNameLists, setTagNameLists] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    excerpt: "",
    slug: "",
    introduction: "",
    contentDetail: "",
    endContent: "",
    img: "",
    link: "",
    categoryName: "",
    tagNameList: "",
  })
  const {
    title,
    content,
    excerpt,
    slug,
    introduction,
    contentDetail,
    endContent,
    img,
    link,
    categoryName,

    tagNameList,
  } = blog
  useEffect(() => {
    loadBlog()
  }, [])
  const loadBlog = async () => {
    const result = await axios.get(`http://localhost:8081/post/detail/${id}`, {
      validateStatus: () => {
        return true
      },
      // headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
    })
    if (result.status === 200) {
      setBlog(result.data)
      // Set tags từ data load về
      if (result.data.tagNameList && Array.isArray(result.data.tagNameList)) {
        setTagNameLists(result.data.tagNameList)
      }
    } else {
      alert("Result failed")
    }
  }
  const handleInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
    // ví name = "firstName" = > firstName:"Jhon"
  }

  const updateBlog = async (e) => {
    e.preventDefault()
    //Ngăn trình duyệt reload lại trang khi form được submit
    try {
      const token = localStorage.getItem("jwtToken")
      await axios.put(`http://localhost:8081/post/update/${id}`, blog, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      console.log("Token:", token) // Debug
      console.log("Blog :", blog)
      // Option 1: Reset form
      setBlog({
        title: "",
        content: "",
        excerpt: "",
        slug: "",
        introduction: "",
        contentDetail: "",
        endContent: "",
        img: "",
        link: "",
        categoryName: "",
        tagNameList: [],
      })
      // Option 2: Redirect
      // navigate("/view-student")  // nếu dùng useNavigate()
      alert("Update Post Successfully!!!")
      navigate("/my-blog")
    } catch (error) {
      console.error("Update Post failed", error)
      alert("Update Post Failed. Please try again.")
    }
  }
  return (
    <div>
      <div
        className="container-fluid write-blog-detail"
        style={{ padding: "0px" }}
      >
        <Navbar></Navbar>
        <div
          className="inner-wrap-write"
          style={{ marginTop: "50px" }}
        >
          <div className="form-write-blog">
            <div
              className="title-write-blog text-center"
              style={{ padding: "30px" }}
            >
              <h2
                style={{ fontSize: "50px", color: "Black", fontWeight: "700" }}
              >
                Update
              </h2>
            </div>

            <form
              action=""
              className="input-group"
              autoComplete="off"
              onSubmit={(e) => updateBlog(e)}
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
                  Excerpt
                </label>
                <textarea
                  className="form-control"
                  name="excerpt"
                  id="excerpt"
                  placeholder="Enter a short Exceprt"
                  aria-label="excerpt"
                  value={excerpt}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={3} // hiển thị cao hơn input thường
                />
              </div>
              <div className="input-group mb-3 category-blog">
                <label
                  htmlFor="categoryName"
                  className="input-group-text"
                >
                  Category Name:
                </label>
                <textarea
                  className="form-control"
                  name="categoryName"
                  id="categoryName"
                  placeholder="Enter a Category Name"
                  aria-label="categoryName"
                  value={categoryName}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={1} // hiển thị cao hơn input thường
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
              <div className="input-group mb-3 tag-name-list-blog">
                <label
                  htmlFor="tagNameList"
                  className="input-group-text"
                >
                  Tags:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tagNameList"
                  id="tagNameList"
                  placeholder="Enter tags (press Enter to add)"
                  //  value={tagNameList}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      const newTag = e.target.value.trim()
                      if (newTag && !tagNameLists.includes(newTag)) {
                        setTagNameLists([...tagNameLists, newTag])
                      }
                      e.target.value = ""
                    }
                  }}
                />
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateBlog
