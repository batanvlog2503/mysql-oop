import React from "react"
import "../Footer/Footer.css"
const Footer = () => {
  return (
    <div className="container footer-section">
      <div className="footer-display">
        <div className="footer-home footer-list">
          <h5>Home</h5>
          <ul
            className="list-home"
            style={{ listStyle: "none" }}
          >
            <li>Features</li>
            <li>Blogs</li>
            <li>Resources</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-news footer-list">
          <h5>News</h5>
          <ul
            className="list-news"
            style={{ listStyle: "none" }}
          >
            <li>Trending Stories</li>
            <li>Feature Videos</li>
            <li>Technology</li>
            <li>Enviroment</li>
            <li>Health</li>
          </ul>
        </div>
        <div className="footer-podcasts footer-list">
          <h5>Podcasts</h5>
          <ul
            className="list-podcasts"
            style={{ listStyle: "none" }}
          >
            <li>AI Ethics</li>
            <li>Renewable Energy</li>
            <li>Space Exploration</li>
            <li>BioHacking</li>
            <li>Biotechnology</li>
          </ul>
        </div>
        <div className="footer-blog footer-list">
          <h5>Blogs</h5>
          <ul
            className="list-podcasts"
            style={{ listStyle: "none" }}
          >
            <li>AI LLM</li>
            <li>Data scientist</li>
            <li>Computer Vision</li>
            <li>Deep Learning</li>
            <li>Machine Learning</li>
          </ul>
        </div>
        <div className="footer-resources footer-list">
            <h5>Resources</h5>
          <ul
            className="list-resources"
            style={{ listStyle: "none" }}
          >
            <li>Whitepapers</li>
            <li>Export</li>
            <li>Report</li>
           
          </ul>
        </div>
      </div>
      <div className="container-fluid end-footer">
        <div className="end d-flex justify-content-between">
            <p>Term & Conditions | Privacy Policy</p>
            <p>@2024 TechBlog. All Rights reserved</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
