import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product'

import HttpService from '../services/http-service';


const http = new HttpService();

class App extends Component {
    
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }
    
  loadData = () => {
     http.getProducts().then(products => {
        console.log(products); 
     }, err => {
         
     });
  }
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Swag Shop</h1>
        </div>
        <div className="App-main">
            <Product />
        </div>
      </div>
    );
  }
}

export default App;
