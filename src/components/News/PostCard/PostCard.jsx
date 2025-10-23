import React from "react"
import postcard1 from "./ImgPostCard/postcard1.jpg"
import postcard2 from "./ImgPostCard/postcard2.jpg"
import postcard3 from "./ImgPostCard/postcard3.jpg"
import postcard4 from "./ImgPostCard/postcard4.jpg"
import postcard5 from "./ImgPostCard/postcard5.jpg"
import "./PostCard.css"
const PostCard = () => {
  return (
    // Post card . các thẻ view
    <div className="container postcard">
      <div className="inner-wrap">
        <div className="row">
          <div className="postcard-img col-xl-4 col-lg-4 col-sm-12 col-12">
            <img
              src={postcard1}
              alt={postcard1}
            />
          </div>
          <div className="postcard-title col-xl-8 col-lg-8 col-sm-12 col-12">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
