import React, { Component } from 'react'
import formatCurrency from './util'

 class Product extends Component {
    render() {
        return (
            <div>
                <ul className='products'>
                    {this.props.prod.map((product, ind) => 
                    <li key={ind}>
                        <div className="product">
                            <a href={"#" + product._id}>
                                <img src={product.image} alt={product.title} />
                                <p>
                                    {product.title}
                                </p>
                            </a>
                            <div className="product-price">
                                <div>{formatCurrency(product.price)}</div>
                                <button type="button" className="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Product