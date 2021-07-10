import React, { Component } from 'react';
import { FormText } from 'react-bootstrap';
import './Books.css';
import Header1 from '../Header1/Header';
import bookimg from '../../images/book.jpeg';
import BooksData from './BooksData.json';
class Books extends Component {
  
   
    constructor(props) {

        super(props); 
        this.state = {first : 0, second: 0}
    };

    componentWillMount = () => {
        let first = Math.ceil(BooksData.length/3)
        let second = Math.ceil((BooksData.length - first)/2)
        this.setState({first: first , second: second})
    }

    addBook = async (event) => {
        let id = event.target.id
        let data = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {"cart": []}
        let res = data.cart;

        await BooksData.map((book)=>{
            if(book._id==id){
                let found = null
                res = res.filter((r)=>{
                    if(r.id==id){
                        found = r;
                        return false
                    }
                    return true
                })
                if(found!=null){
                    found.quantity += 1
                    found.price = book.price*found.quantity
                    res.push(found)
                } else {
                    res.push({
                        "id": book._id,
                        "title": book.title,
                        "quantity": 1,
                        "price": book.price,
                        "description": book.description
                    })
                }
            }
        })
        data["cart"] = res
        await localStorage.setItem("cart",JSON.stringify(data))
        window.location.reload()
    }

    
    htmlContent = () => {

      
        return (  <div>
             <Header1/>  
               
            <div className="row col-md-12 set-row-style">
                <div className="col-md-4">
                    {
                        BooksData.slice(0,this.state.first).map((book)=>{
                        return <div class="card set-card-style custom-classs" >
                                <img class="card-img-top set-img-style" src={bookimg} alt="Card image cap"/>
                                <div class="card-body">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="c1">Title</td>
                                                <td>:</td>
                                                <td className="c2">{book.title}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Description</td>
                                                <td>:</td>
                                                <td className="c2">{book.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Genre</td>
                                                <td>:</td>
                                                <td className="c2">Mystry, Historical Fiction, Family Saga </td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Price</td>
                                                <td>:</td>
                                                <td className="c2">{book.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-default custom-btn-color" id={book._id} onClick={this.addBook}>Add to cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="col-md-4">
                    {
                        BooksData.slice(this.state.first, this.state.first + this.state.second).map((book)=>{
                        return <div class="card set-card-style custom-classs">
                                <img class="card-img-top set-img-style" src={bookimg} alt="Card image cap"/>
                                <div class="card-body">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="c1">Title</td>
                                                <td>:</td>
                                                <td className="c2">{book.title}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Description</td>
                                                <td>:</td>
                                                <td className="c2">{book.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Genre</td>
                                                <td>:</td>
                                                <td className="c2">Mystry, Historical Fiction, Family Saga </td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Price</td>
                                                <td>:</td>
                                                <td className="c2">{book.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-default custom-btn-color" id={book._id} onClick={this.addBook}>Add to cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="col-md-4">
                    {
                        BooksData.slice(this.state.first + this.state.second , BooksData.length).map((book)=>{
                        return <div class="card set-card-style custom-classs">
                               <img class="card-img-top set-img-style" src={bookimg} alt="Card image cap"/>
                                <div class="card-body">
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="c1">Title</td>
                                                <td>:</td>
                                                <td className="c2">{book.title}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Description</td>
                                                <td>:</td>
                                                <td className="c2">{book.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Genre</td>
                                                <td>:</td>
                                                <td className="c2">Mystry, Historical Fiction, Family Saga </td>
                                            </tr>
                                            <tr>
                                                <td className="c1">Price</td>
                                                <td>:</td>
                                                <td className="c2">{book.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <button className="btn btn-default custom-btn-color" id={book._id} onClick={this.addBook}>Add to cart</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            </div> 
        ) 
    }

    render() {
        return (this.htmlContent());
    }
}
export default Books;