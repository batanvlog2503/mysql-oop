import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../Navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import api from "../../../services/apiService"

const UpdateBlog = () => {
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
    tagNameList: "", // String để hiển thị trong input
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

  const [blogOrigin, setBlogOrigin] = useState({
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
    tagNameList: "", // String để hiển thị trong input
  })

  useEffect(() => {
    loadBlog()
  }, [])

  const loadBlog = async () => {
    try {
      const token = localStorage.getItem("jwtToken")
      const result = await axios.get(
        `https://backend-blog-production-c415.up.railway.app/post/detail/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          validateStatus: () => true,
        }
      )

      if (result.status === 200) {
        const data = result.data

        // Convert tagDTOs array thành string
        let tagsString = ""
        if (data.tagDTOs && Array.isArray(data.tagDTOs)) {
          tagsString = data.tagDTOs.map((tag) => tag.name).join(", ")
        }

        setBlog({
          title: data.title || "",
          content: data.content || "",
          excerpt: data.excerpt || "",
          slug: data.slug || "",
          introduction: data.introduction || "",
          contentDetail: data.contentDetail || "",
          endContent: data.endContent || "",
          img: data.img || "",
          link: data.link || "",
          categoryName: data.categoryName || "",
          tagNameList: tagsString, // Set tags dưới dạng string
        })
        setBlogOrigin({
          title: data.title || "",
          content: data.content || "",
          excerpt: data.excerpt || "",
          slug: data.slug || "",
          introduction: data.introduction || "",
          contentDetail: data.contentDetail || "",
          endContent: data.endContent || "",
          img: data.img || "",
          link: data.link || "",
          categoryName: data.categoryName || "",
          tagNameList: tagsString, // Set tags dưới dạng string
        })

        console.log("Blog loaded:", data)
        console.log("Tags string:", tagsString)
      } else {
        alert("Failed to load blog")
      }
    } catch (error) {
      console.error("Error loading blog:", error)
      alert("Error loading blog")
    }
  }

  const handleInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value })
  }

  const updateBlog = async (e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem("jwtToken")

      // Prepare data - convert tagNameList string to array
      const updateData = {
        ...blog,
        tagNameList: blog.tagNameList
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== ""),
      }

      await axios.put(
        `https://backend-blog-production-c415.up.railway.app/post/update/${id}`,
        updateData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      //const result = await api.updatePost(id, updateData)

      console.log("Updated blog:", updateData)
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
                  placeholder="Enter a short Excerpt"
                  value={excerpt}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={3}
                />
              </div>

              <div className="input-group mb-3 category-blog">
                <label
                  htmlFor="categoryName"
                  className="input-group-text"
                >
                  Category Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="categoryName"
                  id="categoryName"
                  placeholder="Enter a Category Name"
                  value={categoryName}
                  onChange={(e) => handleInputChange(e)}
                  required
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
                  placeholder="Enter tags separated by commas (e.g: java, spring, tutorial)"
                  value={tagNameList}
                  onChange={(e) => handleInputChange(e)}
                  required
                  autoComplete="new-password"
                />
              </div>

              <div className="input-group mb-3 introduction-blog">
                <label
                  htmlFor="introduction"
                  className="input-group-text"
                >
                  Introduction:
                </label>
                <textarea
                  className="form-control"
                  name="introduction"
                  id="introduction"
                  placeholder="Write an Introduction..."
                  value={introduction}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={5}
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
                  placeholder="Write a content detail..."
                  value={contentDetail}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={10}
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
                  placeholder="Write a end content..."
                  value={endContent}
                  onChange={(e) => handleInputChange(e)}
                  required
                  rows={5}
                />
              </div>

              <div className="input-group mb-3 img-blog">
                <label
                  htmlFor="img"
                  className="input-group-text"
                >
                  Link Img:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  id="img"
                  placeholder="Enter image URL"
                  value={img}
                  onChange={(e) => handleInputChange(e)}
                  required
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
                  placeholder="Link Tham Khảo..."
                  value={link}
                  onChange={(e) => handleInputChange(e)}
                  rows={2}
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
