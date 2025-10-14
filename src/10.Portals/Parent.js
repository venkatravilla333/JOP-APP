import React, { useState } from 'react'
import Modal from './Modal'

function Parent() {
  var [openModal, setOpenModal] = useState(false)
  
  function toggleModal() {
    setOpenModal(!openModal)
  }
  return (
    <div className='parent'>
      <button onClick={toggleModal}>open modal</button>
      {openModal && <Modal toggleModal={toggleModal} name='sachin' />}
    </div>
  )
}

export default Parent