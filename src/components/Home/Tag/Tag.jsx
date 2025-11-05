import React from "react"
import "../Tag/Tag.css"
import axios from "axios"
import { useState, useEffect } from "react"
const Tag = () => {
  const [tags, setTags] = useState([])

  const { name, slug } = tags
  useEffect(() => {
    loadTags()
  }, [])
  const loadTags = async () => {
    const result = await axios.get("http://localhost:8081/api/tags", {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 200) {
      setTags(result.data) // set data;
    } else {
      //alert("Tags data connected Failed") nhớ cho vào nhé
      console.log("Tag Failed")
    }
  }
  return (
    <div className="inner-tags">
      <h1>Tags</h1>

      <ul className="list-tags">
        {tags.map((tag, index) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
        {/* {tags.map((tag) => (
                <li key={tag.id}>{tag.name}</li>
              ))} */}
        {/* <li>Programming Java</li>
              <li>SpringBoot</li>
              <li>MySQL</li>
              <li>Tips Technology</li> */}
      </ul>
    </div>
  )
}

export default Tag
