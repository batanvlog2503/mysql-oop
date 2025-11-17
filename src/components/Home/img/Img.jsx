import React, { useState, useEffect } from "react"
import axios from "axios"
import api from "../../../services/apiService"
// import defaultImg from "../../assets/default-image.jpg" // nếu bạn muốn dùng ảnh mặc định thay vì placeholder

const Img = ({ id, alt, className }) => {
  const [postDetails, setPostDetails] = useState({})
  const [imgUrl, setImgUrl] = useState("")
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (id && id !== "undefined") {
      loadPostDetails()
    } else {
      console.error("Invalid or missing post ID")
    }
  }, [id])

  const loadPostDetails = async () => {
    try {
      const token = localStorage.getItem("jwtToken")
      // const result = await axios.get(
      //   `https://backend-blog-production-c415.up.railway.app/post/detail/${id}`,
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //     validateStatus: () => true,
      //   }
      // )
      const result = await api.getPostDetailById(id)
      if (result.status === 200) {
        setPostDetails(result.data)
        setImgUrl(result.data.img)
        setImgError(false)
      } else {
        console.warn("Post detail load returned status:", result.status)
        setImgError(true)
      }
    } catch (error) {
      console.error("Error loading post details:", error)
      setImgError(true)
    }
  }

  const handleImgError = () => {
    setImgError(true)
  }

  return (
    <div className={className}>
      {imgUrl && !imgError ? (
        <img
          src={imgUrl}
          alt={alt || postDetails.title || "Post image"}
          onError={handleImgError}
        />
      ) : (
        <div
          className={`img-error ${className || ""}`}
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
          }}
        >
          No Image
        </div>
      )}
    </div>
  )
}

export default Img
