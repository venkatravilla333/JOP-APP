

import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {

  var [login, setLogin] = useState(false)

  // if (login) {
  //   return <Profile setLogin={setLogin} />
  // } else {
  //   return <Login  setLogin={setLogin} />
  // }

  // var element
  // if (login) {
  //  element = <Profile setLogin={setLogin} />
  // } else {
  //   element = <Login  setLogin={setLogin} />
  // }
  // return element

  //  return login? <Profile setLogin={setLogin} /> : <Login  setLogin={setLogin} />
  
 return login && <Profile setLogin={setLogin} /> 

  
  // return (
  //   <div>
  //     <Login />
  //     <Profile/>
  //   </div>
  // )
}

export default Parent