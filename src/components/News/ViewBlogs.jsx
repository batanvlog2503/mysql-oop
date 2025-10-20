

import React from 'react'
import Navbar from '../Navbar'
import NewsIntroduction from './NewsIntroduction'

import { Outlet } from 'react-router-dom'
const ViewBlogs = () => {
  return (
    <div>
        
        <NewsIntroduction></NewsIntroduction>
        <Outlet></Outlet>
        
    </div>
  )
}

export default ViewBlogs