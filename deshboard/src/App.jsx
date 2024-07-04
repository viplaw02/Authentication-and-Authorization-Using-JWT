import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Admin from './components/Admin'
import Student from './components/Student'
export default function App() {
  return (  
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/student' element={<Student />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </> 
  )
}
