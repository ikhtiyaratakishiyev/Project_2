import React from 'react';

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

import './header.scss';

const Header = () => {
  return (
    <div className='project-2__header section__padding' id='home'>
        <div className="project-2__header-content">
          <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className="project-2__header-content__input">
            <input type="email" placeholder='Your email adress' />
            <button type='butten'>Get Started</button>
          </div>
          <div className="project-2__header-content__people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
         
        </div>
        <div className="project-2__header-image">
            <img src={ai} alt="ai" />
          </div>
    </div>
  )
}

export default Header