import React from 'react';
import {google,slack,atlassian,dropbox,shopify} from './imports'
import './brand.scss';

const Brand = () => {
  return (
    <div className='project-2__brand section'>
        <div className='project-2__brand-img'>
          <img src={google} alt="google" />
          <img src={slack} alt="slack" />
          <img src={atlassian} alt="atlassian" />
          <img src={dropbox} alt="dropbox" />
          <img src={shopify} alt="shopify" />
        </div>
    </div>
  )
}

export default Brand