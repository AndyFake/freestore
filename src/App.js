import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './store.js'

const imageList = data.split('\n').map(line=>{
  const directories = line.split('/')
  return directories[directories.length-1]
})

const images = imageList.map(imageName=>{
  const imageUrl = '/images/'+imageName
  return(
    <img src={imageUrl}/>
  )
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        {imageList.map(x=><p>{x}</p>)}
        </p>
        {images}
      </div>
    );
  }
}

export default App;
