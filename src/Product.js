import React, { Component } from 'react'
import formatCurrency from './util'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'
 class Product extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              product:null
         }
     }
     
     openModal = (product) =>{
         this.setState({
             product
         })
     }

     closeModal = () => {
         this.setState({
             product: null
         })
     }

    render() {
        const {product}  = this.state
        return (
            <div>
                <Fade bottom cascade>
                    <ul className='products'>
                        {this.props.prod.map((product, ind) => 
                        <li key={ind}>
                            <div className="product">
                                <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                    <img src={product.image} alt={product.title} />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button type="button" onClick={() => this.props.addToCart(product)} className="btn btn-primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>)}
                    </ul>
                </Fade>
                {
                    product && (
                        <Modal isOpen = {true} onRequestClose={this.closeModal}>
                            <Zoom>
                                <div className="panel">
                                    <div className="panel-heading">
                                        <button onClick={this.closeModal} className="btn btn-btn-default pull-right"><span>X</span></button>
                                    </div>
                                    <div className="panel-body">
                                        <div className="product">
                                            <div className="product-details">
                                                <img src={product.image} alt={product.title} />
                                                <div className="product-description">
                                                    <p><strong>{product.title}</strong></p>
                                                    <p>{product.description}</p>
                                                    <p>Available Sizes:{" "}{product.availableSizes.map(size => <span><span>{" "}</span> <button className='btn btn-default'>{size}</button></span>)}</p>
                                                    <p>Price: {" "} {formatCurrency(product.price)}</p>
                                                    <button className="btn btn-primary" onClick={(e) => {
                                                        this.props.addToCart(product)
                                                        this.closeModal()
                                                    }}>Add To Cart</button>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>  
                                </div>
                            </Zoom>
                        </Modal>
                    )
                }
            </div>
        )
    }
}

export default Product