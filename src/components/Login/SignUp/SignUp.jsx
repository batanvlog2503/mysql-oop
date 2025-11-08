import React from "react"
// import "./Login.css"
import { Outlet, useNavigate, useParams } from "react-router-dom"
// import NavbarLogin from "./NavbarLogin"
import { useState, useEffect } from "react"
import axios from "axios"
const SignUp = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState({
    username: "",
    password: "",
    email: "",
    displayName: "",
    createdAt: "",
  })
  const { username, password, email, displayName } = users
  const handleInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    // ví name = "firstName" = > firstName:"Jhon"
  }

  const saveUser = async (e) => {
    e.preventDefault()
    const now = new Date().toISOString()

    const userToSave = { ...users, createdAt: now }

    try {
      await axios.post("http://localhost:8081/api/auth/register", userToSave)

      console.log(userToSave)
      // Option 1: Reset form
      setUsers({
        username: "",
        password: "",
        email: "",
        displayName: "",
        createdAt: "",
      })
      console.log("Sign Up Successfully")
      alert("Sign UpSuccessfully")
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data || "Username already exists")
      } else {
        alert("Failed to register. Please try again.")
      }
    }
    // } catch (error) {
    //   console.error("Save failed", error)
    //   alert("Failed to save user. Please try again.")
    // }
  }
  return (
    <div className="container-fluid login">
      {/* <NavbarLogin></NavbarLogin> */}

      <div className="wrapper launch">
        <div className="form-login py-2 px-5">
          <div
            className="title-login text-center"
            style={{ padding: "30px" }}
          >
            <h1 style={{ fontSize: "50px", color: "Black", fontWeight: "700" }}>
              Sign Up
            </h1>
          </div>
          <form
            action=""
            className="input-group mb-5"
            autoComplete="off"
            onSubmit={(e) => saveUser(e)}
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
                className="form-control "
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
            <div class="input-group mb-3">
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
                autoComplete="new-password"
              />
            </div>
            <div class="input-group mb-3">
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
                autoComplete="new-password"
              />
            </div>
            <div className="button-submit sign-up">
              <button
                type="submit"
                className="btn btn-outline-success w-100"
              >
                Sign Up
              </button>
            </div>
            <div className="register-link d-flex flex-row justify-content-between align-items-center w-100">
              <button
                type="button"
                onClick={() => navigate("/")}
              >
                <i class="fa-solid fa-left-long"></i> Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default SignUp
