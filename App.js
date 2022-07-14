import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsCompnents from './components/NewsCompnents';

export default class App extends Component {
  
  render() {
    
    return (
      <div>
       <NavBar/>
       <NewsCompnents/>
      </div>
    )
  }
}

