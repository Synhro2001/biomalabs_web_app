import React from 'react'
import './AboutUsProduct.scss';

function AboutUsProduct() {
  return (
    <div className='biomalabs__about-us-product section__padding '>
       <div className="biomalabs__about-us-product__content">
       <h1 className='gradient__text'>Extensive experience in the production of medicines</h1>
            <ul className='experience-statistic'>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#51c5ff"}}>17</span>
                    <span className='experience-statistic-item-text'>Injectable products</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#f7df2a"}}>19</span>
                    <span className='experience-statistic-item-text'>Oral products</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#a3ea4d"}}>8</span>
                    <span className='experience-statistic-item-text'>Peptides products</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#d186f4"}}>2</span>
                    <span className='experience-statistic-item-text'>HGH products</span>
                </li>
            </ul>
            <div className='biomalabs__about-us-product__group '>
                <p>Our professionals comply with all the necessary standards
                for the production of medicines to give our customers the highest quality products. 
                All our products undergo clinical trials before being released to the market.
                </p>
                <p>The company’s product portfolio includes about 45 drugs, more than 45% 
                of which are included in the list of vital medicines. These medicines
                belong to the main pharmacotherapeutic directions and are produced in full compliance with GMP standards.
                </p>
                <p>The company’s product line includes medicines used in testosterone therapy, antitumor therapy,
                cancer prevention, treatment of erectile dysfunction after surgical rehabilitation.
                </p>
                <p>The company relies on the modernization and expansion of production technologies.
                It is constantly developing new technologies, including digital ones. 
                The company achieves ever higher results, both in the production and sales of finished products, from year to year.
                </p>
            </div>
            <ul className='experience-statistic'>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#d186f4"}}>3</span>
                    <span className='experience-statistic-item-text'>Laboratories</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#d186f4"}}>9</span>
                    <span className='experience-statistic-item-text'>Production lines</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#d186f4"}}>46</span>
                    <span className='experience-statistic-item-text'>Genuine products</span>
                </li>
                <li className='experience-statistic-item'>
                    <span className='experience-statistic-item-num' style={{color: "#d186f4"}}>8</span>
                    <span className='experience-statistic-item-text'>Years of experience</span>
                </li>
            </ul>
            <div className='biomalabs__about-us-product__groupB '>
                <div className='biomalabs__about-us-product__content'>
                <p>
                    Our key focus is generic products. 
                    The team of professional pharmacists is taking care of the quality of the production
                    process to offer high-quality products to customers. We do clinical tests for all 
                    of our products before placing them on the market.
                </p>
                <p>
                    BiomaLabs produces only high-quality medicaments that are available at a reasonable price, 
                    based on the purchasing ability of ordinary citizens.
                </p>
                </div>
                <div className="biomalabs__about-us-product__img">
                    <img src='images/about-us-product.jpg' alt='header' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsProduct