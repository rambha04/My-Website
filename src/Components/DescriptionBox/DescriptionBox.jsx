import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
          <div className="description-navigator">
             <div className="description-nav-box"> Description </div>
             <div className="description-nav-box fade"> Reviews(122) </div>
          </div>
          <div className="descriptionbox-description">
            An E-commerce website in an online platform that facilities the buying and selling of products or services over the internet.
             It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.
             E-commerce websites have gained immense popularity due to their convenience,accessibility,and the global reach they offer.
         </div>
         <p> E-commerce websites typically display products or services along with detailed descriptions,images,prices, and any available variations (e.g. sizes,colors).
            Each product usually has its own dedicated page with relevant information. </p>
    </div>
  )
}

export default DescriptionBox