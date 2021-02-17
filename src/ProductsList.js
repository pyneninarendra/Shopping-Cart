// import axios from 'axios'
import React, { Component } from 'react'
import data from './data.json'
import Filter from "./Filter";
import Product from './Product'

class ProductsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: data.products,
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

    render() {
        return (
            <div>
                <Filter count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    sortProducts={this.sortProducts}
                    filterProducts={this.filterProducts}>
                </Filter>
                <Product prod={this.state.products} />
            </div>
        )
    }
}

export default ProductsList