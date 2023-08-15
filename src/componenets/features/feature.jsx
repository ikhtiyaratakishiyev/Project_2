import React from 'react';

import './feature.scss';

const Feature = ({title,text}) => {
  return (
    <div className="project-2__features-container__feature">

    
          <div className="project-2__features-container__feature-title">
          <div/>  
               <h1>{title}</h1>
              
          </div>
         
          <div className="project-2__features-container__feature-text">
               <p>{text}</p>
          </div>

         
 
  </div>
);
  
}

export default Feature