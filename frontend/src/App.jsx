import { Component, useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Home from './components/home'
import Edit from './components/edit'
import Create from './components/create'
import Delete from './components/delete'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Navbar
        content={
          <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/delete/:id" element={<Delete/>}/>
          </Routes>
        }
      />
      
    </>
  )
}

export default App
