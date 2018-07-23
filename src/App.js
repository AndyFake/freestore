import React, { Component } from 'react';
import './App.css';
import {data} from './store.js';
const {name,banner,logo,favicon,currency,products} = JSON.parse(data)

class Product extends Component {
  render(){
    const {name,price,description,image} = this.props.data
    return(
      <div className="Product">
        <img src={'/images/'+image.text}/>
        <div className="Product-bar">
          <div className="Product-name">{name.text}</div>
          <div className="Product-price">{price.text}</div>
        </div>
        <div className="Product-description">{description.text}</div>
        <div className="Add-to-cart">add to cart</div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={`/images/${banner.text}`}/>
        <div className='Store-title'>{name.text}</div>
        {products.map(product=><Product data={product}/>)}
      </div>
    );
  }
}

export default App;
