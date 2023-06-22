import React from 'react'
import "./ProductVerificationForm.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHeart } from '@fortawesome/free-solid-svg-icons'


function ProductVerificationForm() {
  return (
    <div className="verification-form" >
      <div className="verification-form-box gradient__container__bg">
        <div className="form-group--verification ">
          <div className="input-wrap">
            <label htmlFor="product-code" className="input-label"> Code on the package:</label>
            <input type="text" className="product-code form-control" placeholder='XXXXXXXX' />
          </div>
        </div>
        <div className="form-group--verification">
          <div className="input-wrap">
            <label htmlFor="product-code" className="input-label">Your e-mail:</label>
            <input type="text" className="product-code form-control" placeholder='mymail@site.com' />
          </div>
        </div>
        <div className="form-group--verification">
          <div className="input-wrap">
            <label htmlFor="product-code" className="input-label">Are you a robot</label>
            <input type="text" className="product-code form-control" placeholder='Yes or no' />
          </div>
        </div>
      </div>
      <button className='btn-verification btn-verification--large'>
      <FontAwesomeIcon icon={faShieldHeart}/> Start verification
      </button>  
    </div>
  )
}

export default ProductVerificationForm