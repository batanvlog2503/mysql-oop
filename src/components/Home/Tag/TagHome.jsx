import React from "react"
import "../Tag/Tag.css"
import axios from "axios"
import { useState, useEffect } from "react"
import "./TagHome.css"
const TagHome = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    loadTags()
  }, [])
  const loadTags = async () => {
    const result = await axios.get("http://localhost:8081/tags", {
      validateStatus: () => {
        return true
      },
    })
    console.log("tag data")
    console.log(result.data)
    if (result.status === 200) {
      setTags(result.data) // set data;
    } else {
      //alert("Tags data connected Failed") nhớ cho vào nhé
      console.log("Tag Failed")
    }
  }

  //   useEffect(() => {
  //     loadTags()
  //   }, [])
  //   const loadTags = async () => {
  //     const result = await axios.get("http://localhost:8081/api/tags", {
  //       validateStatus: () => {
  //         return true
  //       },
  //     })
  //     if (result.status === 200) {
  //       setTags(result.data) // set data;
  //     } else {
  //       //alert("Tags data connected Failed") nhớ cho vào nhé
  //       console.log("Tag Failed")
  //     }
  //   }
  return (
    <div className="inner-tag-home">
      <div className="inner-tags">
        <h1>Tags</h1>

        <ul className="list-tags">
          {/* <li>HTML</li>
        <li>CSS</li>
        <li>C</li>
        <li>C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>Django</li>
        <li>Ruby</li>
        <li>Golang</li>
        <li>C#</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>MySQl</li>
        <li>React</li> */}

          {tags.map((tag, index) => (
            <li
              key={index}
              className="tag-detail"
            >
              {tag.slug.charAt(0).toUpperCase() + tag.slug.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
{
  /* <Tag onTagSelect={(selectedTag) => setSearch(selectedTag)} /> */
} // lọc theo Tag
export default TagHome

//  {tags.map((tag, index) => (
//           <li key={tag.id}>{tag.name}</li>
//         ))}
//         {/* {tags.map((tag) => (
//                 <li key={tag.id}>{tag.name}</li>
//               ))} */}
//         {/* <li>Programming Java</li>
//               <li>SpringBoot</li>
//               <li>MySQL</li>
//               <li>Tips Technology</li> */}

// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import "./Tag.css"

// const Tag = ({ onTagSelect }) => {
//   const [tags, setTags] = useState([])
//   const [activeTag, setActiveTag] = useState(null)

//   useEffect(() => {
//     loadTags()
//   }, [])

//   const loadTags = async () => {
//     const result = await axios.get("http://localhost:8081/api/tags", {
//       validateStatus: () => true,
//     })
//     if (result.status === 200) {
//       setTags(result.data)
//     } else {
//       console.log("Tag Failed")
//     }
//   }

//   const handleClick = (tag) => {
//     setActiveTag(tag.name)
//     if (onTagSelect) onTagSelect(tag.name) // gửi tag ra ngoài nếu cần lọc blog
//   }

//   return (
//     <div className="inner-tags">
//       <ul className="list-tags">
//         {tags.map((tag, index) => (
//           <li
//             key={index}
//             className={activeTag === tag.name ? "active" : ""}
//             onClick={() => handleClick(tag)}
//           >
//             {tag.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Tag
