import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
const Img = ({ id }) => {
  const [postDetails, setPostDetails] = useState({})
  console.log("Current ID from params:", id) // Debug log
  const [imgUrl, setImgUrl] = useState("")
  useEffect(() => {
    console.log("ID value:", id, "Type:", typeof id) // Kiểm tra giá trị

    if (id && id !== "undefined") {
      loadPostDetails()
    } else {
      console.error("Invalid or missing post ID")
    }
  }, [id])
  const loadPostDetails = async () => {
    const token = localStorage.getItem("jwtToken")
    const result = await axios.get(`http://localhost:8081/post/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      validateStatus: () => {
        return true
      },
    })

    console.log(" Response data:", result.data)
    console.log(" Post title:", result.data.title)
    console.log(" Author:", result.data.authorUser?.displayName)
    //---------img----------
    console.log("IMG value:", result.data.img)
    console.log("IMG type:", typeof result.data.img)
    if (result.status === 200) {
      setPostDetails(result.data)
      setImgUrl(result.data.img)
      // Set comments từ response

      console.log("PostDetail data load successfully")
      console.log(result.data)
    } else {
      alert("Post Details Failed")
    }
  }
  return (
    <div>
      {postDetails.img && (
        <img
          src={imgUrl}
          alt="Post"
        />
      )}
    </div>
  )
}

export default Img
