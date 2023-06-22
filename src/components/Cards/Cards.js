import React from 'react';
import './Cards.scss';
import CardItem from '../CardItem/CardItem';

function Cards() {
  return (
    <div className="biomalabs__cards section__padding">
    <div className="biomalabs__cards-heading">
      <h1 className="gradient__text">The manufacturing complex includes</h1>
    </div>
    <div className="biomalabs__cards-container">
      <div className="biomalabs__cards-container_group">
      <CardItem
        src='images/img-1.png'
        text='A parenteral dosage is a sterile drug product, 
        which presented in the form of suspension, emulsion, or reconstituted lyophilized powder.'
        title='Parenteral dosage forms shop'
      />
       <CardItem
        src='images/img-2.png'
        text='Dosage forms (also called unit doses) are pharmaceutical drug products 
        in the package they are marketed for usage, with a specific mixture of actives.'
        title='Solid dosage forms shop'
      />
      <CardItem
        src='images/img-3.png'
        text='Genetic engineering - is the process of using recombinant
        DNA (rDNA) technology to alter the genetic makeup of an organism.'
        title='Genetic engineering forms shop'
      />
      <CardItem
        src='images/img-4.png'
        text='The Quality Control Centre (QCC) is a multifunctional laboratory offering testing services in
        the field of Food, Materials, Papers & Textiles, Microbiology, and Water testing.'
        title='Quality Control Centre'
      />
      <CardItem
        src='images/img-5.png'
        text='Research and development (R&D) are activities that center around
        the innovation of new products or services in a company.'
        title='Research and development Centre'
      />
      <CardItem
        src='images/img-6.png'
        text='Distribution center employees using an advanced warehouse management system that tracks inventory levels,
        optimizes workflow of storage of medicines and healthcare products.'
        title='Pharmaceutical warehouse'
      />
      </div>
    
    </div>
  </div>
  );
}

export default Cards;