import React from 'react'

function Profile(props) {
  return (
     <div>
        <h4>Profile</h4>
        <img src="https://static.toiimg.com/thumb/msid-63894357,width-400,resizemode-4/63894357.jpg" alt="" width="150px" height="150px"/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, cum ullam autem ipsa tenetur neque, dolores ratione fugit vitae magnam ad id, laudantium ex voluptatum. Iste consequatur numquam quo reprehenderit animi soluta provident? Vitae perspiciatis earum assumenda minus possimus eius autem reprehenderit quae beatae necessitatibus, nulla ea quas ut explicabo, error consectetur dolore consequuntur! Voluptatibus itaque dolorum corrupti iure quisquam, aliquam porro quod a quaerat atque reiciendis, dolor, blanditiis est maxime doloremque saepe architecto minus et. Dolor et ex explicabo ullam fuga! Ducimus, tenetur cupiditate at cumque saepe vel necessitatibus animi culpa mollitia ab quos quia. Corporis autem magni illo.</p>
      <button onClick={()=>props.setLogin(false)}>Logout</button>
      </div>
  )
}

export default Profile