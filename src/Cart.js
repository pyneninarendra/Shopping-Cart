import React, { Component } from 'react'
import formatCurrency from './util';

export default class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <div>
                    {cartItems.length? <div className="cart cartHeader">You have {cartItems.length} in the cart{" "}</div>:<div className="cart cartHeader">Cart is empty</div> }
                </div>
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {
                                cartItems.map(item => 
                                    <li key={item._id}>
                                        <div>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div>
                                            <div>{item.title}{" "}</div>
                                            <div> {formatCurrency(item.price)} x {item.count}
                                            <span className="pull-right text-danger" onClick={()=>this.props.removeFromCart(item)}>
                                                <span className='fa fa-trash'></span>
                                            </span>
                                            </div>
                                           
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                        { cartItems.length !==0 && (
                            <div className="total">
                                    Total: {" "}
                                    {formatCurrency(
                                        cartItems.reduce((a,c) => a+ (c.price * c.count), 0)
                                    )} {" "}<button className="btn btn-success">Checkout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
