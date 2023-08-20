import React from 'react'
import {Blog,Footer,Header,Possibility,WhatProject_2,Features} from './containers'; 
import {Cta,Brand,Navbar,Article} from './componenets';

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
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    

    </div>
  )
}

export default App