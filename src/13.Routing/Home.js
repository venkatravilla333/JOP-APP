import React from 'react'
// import About from './About'
import Profile from './Profile'
import Contact from './Contact'
import {Routes, Route, useLocation} from 'react-router-dom'

import './style.css'
import Header from './Header'
import Products from './Products'
import ProductDetails from './ProductDetails'
import PageNotFound from './PageNotFound'
import Dashboard from './Login'
import Login from './Login'

var About = React.lazy(() => import('./About.js'))

function Home() {
  var url = useLocation()
  console.log(url)
  return (
    <div>
      {/* <Header/> */}
      {url.pathname != '/profile' && <Header/>}
      <Routes>
        <Route path='/' element={<Login/> } />
        <Route path='/about' element={<React.Suspense fallback='Loading'>
          <About/>
          </React.Suspense>} />
        <Route path='*' element={<PageNotFound/> } />
        <Route path='/profile' element={<Profile/> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/products' element={<Products/> } >
          <Route path=':id' element={<ProductDetails />} />
        </Route>
      </Routes>
      
      
    </div>
  )
}

export default Home