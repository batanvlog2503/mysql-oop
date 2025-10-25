import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Router, RouterProvider, BrowserRouter, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';	
import Home from './components/Home/Home'
import "./index.css"
import ViewBlogs from './components/News/ViewBlogs'
import MainLayout from './components/MainLayout'
import PostDetailLayout from './components/News/PostDetail/PostDetailLayout'
import PostDetail from './components/News/PostDetail/PostDetail'
import Login from './components/Login/Login'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element = {<Login/>  }></Route>
      <Route path="home" element={<Home />} />
      <Route path="view-blogs" element={<ViewBlogs />}>
        {/* <Route path = ":id" element = {<PostDetailLayout/>}></Route> */}
      </Route>
      <Route path="view-blogs/:id" element={<PostDetailLayout />}> 
      <Route index element = {<PostDetail></PostDetail>} ></Route>
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
