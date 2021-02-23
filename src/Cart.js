import React, { Component } from 'react'
import formatCurrency from './util';
import Fade from 'react-reveal/Fade'

export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email:'',
            address:'',
            showCheckout: false 
        }
    }

    handleEvent = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createOrder =(e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order)        
    }
    
    render() {
        const {cartItems} = this.props;
        return (
            <div>
                <div>
                    {cartItems.length? <div className="cart cartHeader">You have {cartItems.length} in the cart{" "}</div>:<div className="cart cartHeader">Cart is empty</div> }
                </div>
                <div>
                    <div className="cart">
                        <Fade left cascade>
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
                        </Fade>
                        { cartItems.length !==0 && (
                            <div className="total">
                                    Total: {" "}
                                    {formatCurrency(
                                        cartItems.reduce((a,c) => a+ (c.price * c.count), 0)
                                    )} {" "}<button onClick={()=> {this.setState({
                                        showCheckout: true
                                    })}} className="btn btn-success">Checkout</button>
                            </div>
                        )}
                    </div>
                </div>
                {
                        this.state.showCheckout && (<div className="checkoutForm">
                            <Fade right cascade>
                            <form className="form-horizontal" onSubmit={this.createOrder}>
                                <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" onChange={this.handleEvent} />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" onChange={this.handleEvent} />
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name="address" onChange={this.handleEvent} />
                                </div>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </form>
                            </Fade>
                        </div>)
                    }
            </div>
        )
    }
}
