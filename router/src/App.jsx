import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

function App() {
const router =createBrowserRouter([
  {
    path: "/",
    element:  <> <Nav/><Home/></>
   
  },
  {
    path: "/login",
    element:  <>  <Nav/><Login/></>
  },
  {
    path: "/about",
    element:   <><Nav/><About/></>
  },
  {
    path: "/user/:username",
    element:   <><Nav/><User/></>
  },
])

  return (
    <>
   
     <RouterProvider router={router}/>

    </>
  )
}

export default App
