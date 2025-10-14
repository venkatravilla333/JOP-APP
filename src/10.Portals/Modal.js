import React from 'react'
import './style.css'
import ReactDOM from 'react-dom'
function Modal(props) {
 return ReactDOM.createPortal(<div className='overlay'>
      <div className='text'>
     <h4>Header, {props.name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora blanditiis cumque deserunt doloremque at architecto iste dolore, quas nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit maxime a ab harum reiciendis nostrum libero sapiente porro explicabo laudantium.</p>
        <button onClick={()=>props.toggleModal(false)}>close</button>
      </div>
    </div>, document.getElementById('portal-root'))
 
}

export default Modal