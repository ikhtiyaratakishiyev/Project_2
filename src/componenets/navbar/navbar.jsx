import React from 'react';
import {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.scss';

const Navbar = () => {

  const [toggleMenu,setToggleMenu]=useState(false);
  return (
    <div className='Project_2__navbar'>
       <div className="project_2__navbar-links">
          <div className="project_2__navbar-links-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="project_2_navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
             <p><a href="#blog">Library</a></p>
          </div>
        </div>

        <div className="project_2__navbar-sign">
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>

          <div className="project_2__navbar-menu">
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}


            {toggleMenu &&(
              <div className='project_2__navbar-menu_container scale-up-center'>
                <div className='project_2__navbar-menu_container-links'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>
                <div className="project_2__navbar-menu_container-links-sign">
                       <p>Sign in</p>
                      <button type='button'>Sign up</button>
                    </div>
                </div>
                     
              </div>
            )}

       
          </div>
        </div>        
    
  )
}

export default Navbar