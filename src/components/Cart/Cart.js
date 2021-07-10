import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Header1 from '../Header1/Header';
import bookimg from '../../images/book.jpeg';
import './Cart.css';
class Cart extends Component {
  
   
    constructor(props) {

        super(props); 
        this.state = {data: [], totalPay : 0}
    };

    componentWillMount = async () => {
        let data = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {"cart": []}
        let total = 0
        await data["cart"].map((r)=>{
            total += r.price;
        })
        this.setState({data: data["cart"], totalPay : total})
    }

    removeFromCart = async (event) => {

        let id = event.target.id
        let data = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {"cart": []}
        let res = data.cart;
        res = res.filter((r)=>{
            if(r.id==id)return false
            return true;
        })
        data["cart"] = res
        await localStorage.setItem("cart",JSON.stringify(data))
        window.location.reload()
    }

    checkout = () => {
        window.location.href = "/Checkout"
    }
    
    htmlContent = () => {
        return (  
                <div>
                    <Header1/>
               
            <div className="row col-md-12 set-row-style">
              
            {
                this.state.data.length == 0 ?
                <div class="row col-md-12 alert alert-danger" role="alert">
                    Cart is Empty !!
                </div>
                :
                <React.Fragment>
                {
                    this.state.data.map((cart)=>{
                    return <div className="col-md-10 set-div-style custom-class">
                        <div class="card set-card-style-1 custom-class1">
                                <div class="row card-body">
                                    
                                    <div className="col-md-8 set-style-div-2">
                                    <div className="col-md-2">
                                        <img class="set-img-style custom-img" src={bookimg} alt="Card image cap"/>
                                    </div>
                                             
                                        <table className="table table-borderless custom-table">
                                            <tbody>
                                               <tr>
                                                    <td className="c1">Title</td>
                                                    <td>:</td>
                                                    <td className="c2">{cart.title}</td>
                                                </tr>
                                                <tr>
                                                    <td className="c1">Description</td>
                                                    <td>:</td>
                                                    <td className="c2">{cart.description}</td>
                                                </tr>
                                                <tr>
                                                    <td className="c1">Quantity</td>
                                                    <td>:</td>
                                                    <td className="c2">{cart.quantity}</td>
                                                </tr>
                                                <tr>
                                                    <td className="c1">Price</td>
                                                    <td>:</td>
                                                    <td className="c2">{cart.price}</td>
                                                </tr>
                                                <tr>
                                                <button className="btn btn-sm btn-danger seet-btn-position custom-button" id={cart.id} onClick={this.removeFromCart}>Remove</button>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    })
                }
                <div className="row col-md-12 set-pay-style">
                    <div class="col-md-12 alert alert-success" role="alert">
                        Net payable amount is <b>{this.state.totalPay} !!</b>
                    </div>
                </div>
                <Button variant="success" className ="btn1" size="lg" onClick= {this.checkout}>Checkout </Button>{' '}
                </React.Fragment>
            }                
            </div>
            </div>
           
        ) 
    }

    render() {
        return (this.htmlContent());
    }
}
export default Cart;