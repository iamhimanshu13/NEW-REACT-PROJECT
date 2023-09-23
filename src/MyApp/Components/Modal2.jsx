import React from 'react'


const Modal2 = (props) => {

  return (
    <div className="modal-back">
      <div>
      <div className="form-signup">
      <i className="fa-solid fa-xmark xmark" onClick={props.handleclick}></i>
    <p id="heading">Sign up</p>
    <div className="field">
   
      <input autocomplete="off" placeholder="Name" className="input-field" type="text" />
    </div>
    <div className="field">
      <input placeholder=" E-mail" className="input-field" type="email" />
    </div>


    <div className="field">
      <input placeholder="Mobile No" className="input-field" type="number" />
    </div>


    <div className="field">
  
      <input placeholder="Address" className="input-field" type="address" />
    </div>

    <div className="field">
   
      <input placeholder="Password" className="input-field" type="password" />
    </div>
    <div className="field">
   
   <input placeholder="Re-enter password" className="input-field" type="password" />
 </div>




    <button className="button3">Sign Up</button>
    {/* <button className="button3">Forgot Password</button> */}
</div>
      </div>
     
          
    </div>

  )
}

export default Modal2;