import React from 'react'
import About from './About'
import Profile from './Profile'
import Contact from './Contact'
import {Routes, Route} from 'react-router-dom'

import './style.css'
import Header from './Header'
function Home() {

  return (
    <div>
       <Header/>
      <Routes>
        <Route path='/about' element={<About/> } />
        <Route path='/profile' element={<Profile/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      
    </div>
  )
}

export default Home