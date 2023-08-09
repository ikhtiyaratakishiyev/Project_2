import React from 'react'
import {Blog,Feature,Footer,Header,Possibility,WhatProject_2} from './containers'; 
import {Cta,Article,Brand,Navbar,} from './componenets';

import './App.scss'
import './index.scss'

const App = () => {
  return (
    <div className='App'>
        <div className="gradient_bg">
      <Navbar/>
      <Header/>
        </div>
      <Brand/>
      <WhatProject_2/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    

    </div>
  )
}

export default App