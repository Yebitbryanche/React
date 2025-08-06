import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Containers/Navigation'
import Home from './Pages/Home'


const navData = [
  {
    title:'Home',
    path:"/"
  },
  {
    title:'Products',
    path:"/products",
    icon:<FaChevronDown />
  },
  {
    title:"Expertise",
    path:"/expertise",
    icon:<FaChevronDown />
  },
  {
    title:"Internship",
    path:"/internship",
  },
  {
    title:"Blog",
    path:"/blog",
  }

]

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar items={navData}/>
          <Routes>
            <Route path='/' element = {<Home/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
