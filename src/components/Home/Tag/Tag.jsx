import React from "react"
import "../Tag/Tag.css"
import axios from "axios"
import { useState, useEffect } from "react"
import api from "../../../services/apiService"

const Tag = ({ onTagSelect }) => {
  const [tags, setTags] = useState([])
  const [activeTag, setActiveTag] = useState(null)

  useEffect(() => {
    loadTags()
  }, [])

  const loadTags = async () => {
    // const result = await axios.get("https://backend-blog-production-c415.up.railway.app/tags", {
    //   validateStatus: () => true,
    // })
    const result = await api.getTags()
    if (result.status === 200) {
      setTags(result.data)
    } else {
      console.log("Tag Failed")
    }
  }

  const handleClick = (tag) => {
    if (activeTag === tag.slug) {
      // Nếu click vào tag đang active, reset về tất cả
      setActiveTag(null)
      if (onTagSelect) onTagSelect(null)
    } else {
      // Set tag mới
      setActiveTag(tag.slug)
      if (onTagSelect) onTagSelect(tag.slug) // đây chính là tagSlug
    }
  }

  return (
    <div className="inner-tags">
      <ul className="list-tags">
        {tags.map((tag, index) => (
          <li
            key={index}
            // className={activeTag === tag.slug ? "active" : ""}
            onClick={() => handleClick(tag)}
          >
            {tag.slug.charAt(0).toUpperCase() + tag.slug.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tag
