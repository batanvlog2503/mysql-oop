import React, { useState } from "react"
import "./Comment.css"

import image from "./Img/image.png"
import axios from "axios"
import api from "../../../services/apiService"
const Comment = ({ comment, postId }) => {
  const user = JSON.parse(localStorage.getItem("loginUser"))

  const handleDelete = async (commentId) => {
    const token = localStorage.getItem("jwtToken")
    console.log(user.data)
    if (window.confirm("Bạn có chắc muốn xóa bình luận này không?")) {
      try {
        // await axios.delete(
        //   `http://localhost:8081/post/${postId}/comments/${commentId}`,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
        // )
        const result = await api.deleteComment(postId, commentId)
        alert("Đã xóa bình luận!")
        window.location.reload() // load lại trang hoặc bạn có thể filter state để không cần reload
      } catch (error) {
        alert(
          "Không thể xóa bình luận này — bạn không có quyền hoặc lỗi server"
        )
        console.error(error)
      }
    }
  }
  return (
    <div>
      <div className="list-comment">
        <div className="post-detail-display-comment">
          <h2>Mới nhất</h2>
          <div className="list-comment">
            {comment.length > 0 ? (
              comment.map((cmt, index) => (
                <div
                  key={index}
                  className="comment-details"
                >
                  <div className="user-comment">
                    <img
                      src={image}
                      alt={image}
                    />
                    <strong>@{cmt.userDTO.displayName}:</strong>
                  </div>
                  <div className="user-content">
                    <p>{cmt?.contentComment}</p>

                    {/* Hiện nút xóa nếu là người viết */}
                    {user.username === cmt.userDTO.username && (
                      <div className="d-flex justify-content-between">
                        <div></div>
                        <button
                          className="delete-btn delete-comment"
                          onClick={() => handleDelete(cmt.id)}

                        >
                          Xóa
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p>Chưa có bình luận nào.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
