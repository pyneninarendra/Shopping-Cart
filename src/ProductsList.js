// import axios from 'axios'
import React, { Component } from 'react'
import data from './data.json'
import Product from './Product'

class ProductsList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            prod: data.products
        }
    }

    
    render() {
        return (
            <div>
                <Product prod={this.state.prod} />
            </div>
        )
    }
}

export default ProductsList