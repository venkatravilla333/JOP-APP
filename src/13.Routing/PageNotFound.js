import React, { useEffect } from 'react'

import {Navigate, useNavigate} from 'react-router-dom'

function PageNotFound() {

  var navivagte = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navivagte('/')
    }, 1000)
  })
  return (
    <div className='notfound'>
      {/* <Navigate to={'/'}/> */}
      <h3>PageNotFound 404</h3>
    </div>
    
  )
}

export default PageNotFound