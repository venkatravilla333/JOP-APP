import React from 'react'

function Login(props) {
  return (
    <div>
        <h4>Login</h4>
        <form>
          <input type="text" />
          <br />
          <br />
        <input type="password" />
        <br />
        <br />
        <button  onClick={()=>props.setLogin(true)}>submit</button>
        </form>
      </div>
  )
}

export default Login