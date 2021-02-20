import React, { Component } from 'react'
import Cart from "./Cart";
import data from './data.json'
import Filter from "./Filter";
import Product from './Product'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
        products: data.products,
        cartItems:[],
        size:"",
        sort:""
    }
}
sortProducts = event => {
  let sort = event.target.value
  event.target.value?
  this.setState({
     sort: sort,
     products: this.state.products.slice().sort((a,b) => 
      sort === 'Lowest' ? a.price> b.price? 1: -1 :
      sort === 'Highest' ? a.price < b.price? 1: -1 :
      a._id > b._id ? 1 : -1
     )
  })
  : 
  this.setState({
      sort: event.target.value,
      products:data.products
  })
}

filterProducts= event => {
  event.target.value ? 
  this.setState({
      size: event.target.value,
      products: data.products.filter(prod => prod.availableSizes.indexOf(event.target.value)>=0)
  })        
  :
  this.setState({
      size: event.target.value,
      products:data.products
  })
}

addToCart=(product)=>{
  const cartItems = this.state.cartItems.slice();
  let alreadyInCart = false;
  cartItems.forEach(item => {
      if(item._id === product._id){
          item.count++;
          alreadyInCart = true;
      }
  })
  if(!alreadyInCart){
      cartItems.push({...product, count:1});
  }
  this.setState({
    cartItems: cartItems
  })
}

removeFromCart = (item) => {
  const cartItems = this.state.cartItems.slice();
  this.setState({
    cartItems: cartItems.filter(x => x._id !== item._id)
  })
}

render() {
  return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>            
            <Filter count={this.state.products.length}
                      size={this.state.size}
                      sort={this.state.sort}
                      sortProducts={this.sortProducts}
                      filterProducts={this.filterProducts}>
                  </Filter>
                  <Product addToCart={this.addToCart} prod={this.state.products} />
            </div>
            <div className='sidebar'>
              <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </div>          
          </div>
        </main>
        <footer>
          All right reserved, 2012
        </footer>
      </div>
    );
  }
}

export default App;