import React from 'react'
import "./ProductVerificationSection.scss";
import ProductVerificationForm from '../../ProductVerificationForm/ProductVerificationForm';

function ProductVerificationSection() {
  return (
    <div className='product-verification-container gradient__bg section__padding'>
     
      <h1>Product Verification</h1>
      <p>Here you can verify the authenticity of the company's product.
      Please, remove scratch off the coating and enter the
      Verification Code here:
      </p>
      <p>*Dear customers! Please, do not misspell “0” and “O”, “1” and “I”.</p>
      <div className='product-ver-form  '>
        <ProductVerificationForm/>
      </div>

    </div>
      
    );
}

export default ProductVerificationSection