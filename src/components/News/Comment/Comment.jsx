import React, { useState } from "react"
import "./Comment.css"
import image from "./Img/image.png"
const Comment = ({ comment }) => {
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
                    <img src={image} alt={image} />
                    <strong>@{cmt?.displayName}:</strong>
                  </div>
                  <div className="user-content">
                    <p>{cmt?.contentComment}</p>
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
