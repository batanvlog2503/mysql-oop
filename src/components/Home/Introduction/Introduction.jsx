import React, { useEffect } from "react"
import "../Introduction/Introduction.css"
import { useState } from "react"
import axios from "axios"
import Tag from "../Tag/Tag"
const Introduction = () => {
  const [tags, setTags] = useState([])

  const { name, slug } = tags
  useEffect(() => {
    loadTags()
  }, [])
  const loadTags = async () => {
    const result = await axios.get("http://localhost:8080/api/tags", {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 200) {
      setTags(result.data) // set data;
    } else {
      alert("Tags data connected Failed")
    }
  }
  return (
    <div className="container-fluid introduction-section">
      <div className="row w-100">
        <div className="introduce-left col-lg-8 col-xl-8 col-sm-12 col-12 h-100">
          <div className="inner-introduce">
            <p>Your Journey to Tomorrow Begins here</p>
            <h1>Explore the Frontiers of Information Technology</h1>
            <p>
              Welcome to our blog - Where we can share and exchange knowledge
              about information technology.{" "}
            </p>
          </div>
          <div className="inner-statistic">
            <div className="row">
              <div className="inner-statistic-1 col-lg-4 col-xl-4 col-sm-12 col-12">
                <h1>
                  300<span style={{ color: "orange" }}>+</span>
                </h1>
                <p>Resources available</p>
              </div>
              <div className="inner-statistic-2 col-lg-4 col-xl-4 col-sm-12 col-12">
                <h1>
                  12K<span style={{ color: "orange" }}>+</span>
                </h1>
                <p>Total Downloads</p>
              </div>
              <div className="col-lg-4 col-xl-4 col-sm-12 col-12">
                <h1>
                  10K<span style={{ color: "orange" }}>+</span>
                </h1>
                <p>Active Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 col-sm-12 col-12">
          <Tag></Tag>
        </div>
      </div>
    </div>
  )
}

export default Introduction
