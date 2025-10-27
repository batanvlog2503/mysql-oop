import React, { useContext } from "react"
import "./Login.css"
import { Outlet, useNavigate, useParams } from "react-router-dom"
import NavbarLogin from "./NavbarLogin"
import { useState, useEffect } from "react"
import axios from "axios"
import { UserContext } from "../UserContext"

const Login = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    username: "",
    password: "",
  })
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    // Khi người dùng mở lại trang Login, reset form
    setUsers({ username: "", password: "" })
    //setError("");
  }, [])

  const handleInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    // ví name = "firstName" = > firstName:"Jhon"
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // ngăn chặn trước khi submit
    try {
      const result = await axios.get("http://localhost:8080/api/users", {
        validateStatus: () => {
          return true
        },
      })

      if (result.status === 200) {
        console.log("Users Load Succesfully")
      }
      const data = result.data

      const foundUser = data.find(
        (u) => u.username === username && u.password === password
      )

      if (foundUser) {
        alert("Login Successfully")
        console.log("Login Successfully")
        setUser(foundUser)
        setUsers({ username: "", password: "" })
        navigate(`/home`)
      }
    } catch (error) {
      console.log("Error Fetching User, ", error)
    }
  }

  const { username, password } = users
  return (
    <div className="container-fluid login">
      {/* <NavbarLogin></NavbarLogin> */}

      <div className="wrapper launch">
        <div className="form-login py-2 px-5">
          <div
            className="title-login text-center"
            style={{ padding: "30px" }}
          >
            <h1 style={{ fontSize: "50px", color: "White", fontWeight: "700" }}>
              Login
            </h1>
          </div>
          <form
            action=""
            className="input-group mb-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="input-group mb-3">
              <label
                htmlFor="username"
                className="input-group-text"
              >
                <i class="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="username"
                aria-label="username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={(e) => handleInputChange(e)}
                required
                autoComplete="new-password"
              />
            </div>

            <div class="input-group mb-3">
              <label
                htmlFor="password"
                className="input-group-text"
              >
                <i class="fa-solid fa-lock"></i>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon3"
                value={password}
                onChange={(e) => handleInputChange(e)}
                required
                autoComplete="new-password"
              />
            </div>
            {/* <div class="input-group mb-3">
              <label
                htmlFor="email"
                className="input-group-text"
              >
                <i class="fa-solid fa-envelope"></i>
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email"
                aria-label="email"
                aria-describedby="basic-addon2"
                value={email}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div> */}
            {/* <div class="input-group mb-3">
              <label
                htmlFor="displayName"
                className="input-group-text"
              >
                <i class="fa-regular fa-circle-user"></i>
              </label>
              <input
                type="text"
                className="form-control"
                name="displayName"
                id="displayName"
                placeholder="displayName"
                aria-label="displayName"
                aria-describedby="basic-addon3"
                value={displayName}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div> */}
            <div className="button-submit">
              <button
                type="submit"
                className="btn btn-outline-success w-100"
              >
                Login
              </button>
            </div>
            <div className="register-link d-flex flex-row justify-content-between align-items-center w-100">
              <p className="mb-0">Don't have an account?</p>
              <button
                type="button"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default Login
